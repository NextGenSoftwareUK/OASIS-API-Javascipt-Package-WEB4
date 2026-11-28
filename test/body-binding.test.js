'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { once } = require('node:events');
const { HttpClient } = require('../src/core/httpClient');
const cases = [
 ['Chat','sendMessage',{sessionId:'owned-session',message:'hello'},'/api/chat/send-message/owned-session','hello',{}],
 ['Eggs','discoverEgg',{eggType:'Golden',name:'Owned egg',locationId:'6bf56398-6aa1-4f22-b01b-42cf941b8d38',locationName:'Owned location',discoveryMethod:'Exploration'},'/api/eggs/discover','Golden',{name:'Owned egg',locationId:'6bf56398-6aa1-4f22-b01b-42cf941b8d38',locationName:'Owned location',discoveryMethod:'Exploration'}],
 ['HyperDrive','setHyperDriveMode',{mode:'Manual'},'/api/hyperDrive/mode','Manual',{}],
 ['Map','visitLocation',{locationId:'6bf56398-6aa1-4f22-b01b-42cf941b8d38',purpose:'Walking'},'/api/map/visit/6bf56398-6aa1-4f22-b01b-42cf941b8d38','Walking',{}],
 ['Messaging','sendMessageToAvatar',{toAvatarId:'6bf56398-6aa1-4f22-b01b-42cf941b8d38',content:'hello',messageType:'Direct'},'/api/messaging/send-message-to-avatar/6bf56398-6aa1-4f22-b01b-42cf941b8d38','hello',{messageType:'Direct'}],
 ['Video','joinVideoCall',{callId:'owned-call',connectionDetails:'owned-details'},'/api/video/join-call/owned-call','owned-details',{}],
 ['Wallet','transferBetweenWalletsAsync',{fromAvatarId:'6bf56398-6aa1-4f22-b01b-42cf941b8d38',toAvatarId:'08006b54-282f-4bbc-8db5-7272ee521c54',amount:0,waitTillTokenSent:false},'/api/wallet/transfer',{fromAvatarId:'6bf56398-6aa1-4f22-b01b-42cf941b8d38',toAvatarId:'08006b54-282f-4bbc-8db5-7272ee521c54',amount:0,waitTillTokenSent:false},{}],
 ['Map','visitLocation',{locationId:'6bf56398-6aa1-4f22-b01b-42cf941b8d38'},'/api/map/visit/6bf56398-6aa1-4f22-b01b-42cf941b8d38',undefined,{}]
];

test('declared body parameters preserve JSON values and separate query/path arguments', {timeout:15000}, async () => {
 const received=[];
 const server=http.createServer(async(req,res)=>{
  let body='';for await(const chunk of req){body+=chunk;if(body.length>4096){req.destroy();return;}}
  received.push({url:new URL(req.url,'http://127.0.0.1'),body,headers:req.headers});
  res.writeHead(200,{'Content-Type':'application/json','Connection':'close'});res.end('{"isError":false,"result":true}');
 });
 try {
  server.listen(0,'127.0.0.1');await once(server,'listening');
  const client=new HttpClient({baseUrl:'http://127.0.0.1:'+server.address().port});
  for(const [moduleName,method,args,pathname,body,query] of cases){
   const Module=require('../src/modules/'+moduleName)[moduleName+'Module'];
   const result=await new Module(client)[method](args);assert.equal(result.isError,false);
   const observed=received.at(-1);assert.equal(observed.url.pathname,pathname);
   assert.equal(observed.body,body===undefined?'':JSON.stringify(body));
   assert.deepEqual(Object.fromEntries(observed.url.searchParams),query);
   assert.match(observed.headers['idempotency-key'],/^[0-9a-f-]{36}$/i);
   assert.equal(observed.headers['x-cosmic-operation-id'],observed.headers['idempotency-key']);
  }
  assert.equal(received.length,cases.length);
 } finally { server.closeAllConnections();await new Promise(resolve=>server.close(resolve)); }
});
