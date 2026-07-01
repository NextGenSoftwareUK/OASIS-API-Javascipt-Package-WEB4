# WEB4 OASIS API Javascript Package

- [WEB4 OASIS API Javascript Package](#web4-oasis-api-javascript-package)
  - [Previous Versions](#previous-versions)
  - [Introduction](#introduction)
  - [Overview](#overview)
    - [Best Of All Worlds](#best-of-all-worlds)
    - [Maximum Interopability/Aggregation](#maximum-interopabilityaggregation)
    - [HOT Swappable Plugin Architecture](#hot-swappable-plugin-architecture)
    - [Full Redundancy/Zero Downtime/Impossible To Shutdown](#full-redundancyzero-downtimeimpossible-to-shutdown)
    - [HTTP REST/gRPC/GraphQL/CLI/Native Endpoints](#http-restgrpcgraphqlclinative-endpoints)
    - [Javascript, Unity & C# Packages](#javascript-unity--c-packages)
    - [Avatar API](#avatar-api)
    - [Karma API](#karma-api)
    - [Full Accountability/Zero Crime/Dark Net Prove](#full-accountabilityzero-crimedark-net-prove)
    - [Data API](#data-api)
    - [Future Prove! Never Need To Learn A New Tech Stack/Language Again](#future-prove-never-need-to-learn-a-new-tech-stacklanguage-again)
    - [SEEDS API](#seeds-api)
    - [Keys/Wallet API](#keyswallet-api)
    - [Works Offline/Local Networks (LAN, Bluetooth, Mesh Networks)](#works-offlinelocal-networks-lan-bluetooth-mesh-networks)
    - [OAPPS - Write Once, Deploy Everywhere](#oapps---write-once-deploy-everywhere)
    - [One API To Rule Them All - The GOD Protocol/API](#one-api-to-rule-them-all---the-god-protocolapi)
    - [Full Smart Contract Interoperability](#full-smart-contract-interoperability)
    - [Powerful Pick n Mix & Plug n Play UI Components](#powerful-pick-n-mix--plug-n-play-ui-components)
    - [WEB/2D/3D/AR/VR/IR/Map/Meta Visusalization](#web2d3darvrirmapmeta-visusalization)
    - [Our World Geo-Location/AR/IR/Map UI (Game Of Games Engine)](#our-world-geo-locationarirmap-ui-game-of-games-engine)
    - [IR (Infinite Reality) Ready](#ir-infinite-reality-ready)
    - [One World Open World MMO (VR) (Game Of Games Engine)](#one-world-open-world-mmo-vr-game-of-games-engine)
    - [XR/IR Unified Interface To The World](#xrir-unified-interface-to-the-world)
    - [ARC/HoloMap/Synergy Engine Integration](#archolomapsynergy-engine-integration)
    - [WEB 5 STAR OASIS Omniverse Interoperable Metaverse Low Code Generator](#web-5-star-oasis-omniverse-interoperable-metaverse-low-code-generator)
    - [AI/Machine Learning Over All Of World's Aggregated Data](#aimachine-learning-over-all-of-worlds-aggregated-data)
    - [Summary](#summary)
  - [Benefits Of Building On The WEB4 OASIS API](#benefits-of-building-on-the-web4-oasis-api)
  - [WEB 4 OASIS API Packages](#web-4-oasis-api-packages)
    - [Javascript](#javascript)
    - [Unity](#unity)
    - [C](#c)
  - [Do You Want To Get Involved?](#do-you-want-to-get-involved)
  - [How To Use](#how-to-use)
  - [Getting started](#getting-started)
  - [Auth](#auth)
    - [Login](#login)
    - [Signup](#signup)
    - [Logout](#logout)
    - [Forgot password](#forgot-password)
    - [Get user](#get-user)
  - [Avatar](#avatar)
    - [get](#get)
    - [Get All](#get-all)
    - [update](#update)
    - [delete](#delete)
    - [addKarma](#addkarma)
    - [removeKarma](#removekarma)
  - [Data](#data)
    - [loadHolon](#loadholon)
    - [loadAllHolons](#loadallholons)
    - [loadHolonsForParent](#loadholonsforparent)
    - [saveHolon](#saveholon)
    - [saveHolonOffChain](#saveholonoffchain)
    - [deleteHolon](#deleteholon)
  - [Karma](#karma)
    - [getKarmaForAvatar](#getkarmaforavatar)
    - [removeKarmaForAvatar](#removekarmaforavatar)
    - [getKarmaAkashicRecordsForAvatar](#getkarmaakashicrecordsforavatar)
  - [Holochain](#holochain)
    - [getHolochainAgentIdForAvatar](#getholochainagentidforavatar)
    - [getHolochainAgentPrivateKeyForAvatar](#getholochainagentprivatekeyforavatar)
    - [getAvatarIdForHolochainAgentId](#getavataridforholochainagentid)
    - [getHoloFuelBalanceForAgentId](#getholofuelbalanceforagentid)
    - [getHoloFuelBalanceForAvatar](#getholofuelbalanceforavatar)
    - [getHoloFuelBalanceForAvatar](#getholofuelbalanceforavatar-1)
  - [NFT](#nft)
    - [createPurchase](#createpurchase)
    - [getOlandPrice](#getolandprice)
    - [purchaseOLAND](#purchaseoland)
  - [Solona](#solona)
    - [mint](#mint)
    - [exchange](#exchange)

## Previous Versions

npm does not let you rename an existing package in place, so this package has been renamed twice as the OASIS ecosystem evolved, and each rename forced a new package to be created on npm:

1. `oasis-api` (original name)
2. `web4-oasis-api` (renamed as part of the WEB4 branding)
3. `@oasisomniverse/web4-api` (current — renamed into the `@oasisomniverse` scope alongside the WEB5-WEB10 packages, so the whole OASIS Omniverse API family is grouped under one consistent, professional namespace)

Both older packages have been deprecated on npm and point here. We keep them published (rather than unpublishing) to preserve their version history and download stats:
- https://www.npmjs.com/package/oasis-api
- https://www.npmjs.com/package/web4-oasis-api

This package starts at `v2.0.0` rather than `v1.0.0` because it is a continuation of that existing `web4-oasis-api` lineage, not a new package — the version numbering picks up where the previous name left off. The other `@oasisomniverse/web5-api` through `@oasisomniverse/web10-api` packages are brand new (no prior published history under any name), so they correctly start at `v1.0.0`.

The current version of this package can be found here:
https://www.npmjs.com/package/@oasisomniverse/web4-api

## Introduction

This package is for client applications to connect and work with the OASIS API.

## Overview

The WEB4 OASIS API enables you to integrate your project with everything else (WEB2 & WEB3) such as all blockchains, holochain & much more. It also provides SSO, load balancing, auto failover, auto replication, zero downtime, zero lag, infinite players and much more!

Various OASIS API functions and services can be accessed with this API such as Authentication, Karma, Avatars, Data, SEEDS, Wallets/Keys & more...

<http://api.oasisplatform.world>

This allows you to bridge between all of WEB2 & WEB3 Holochain, IPFS, MongoDB, SQLLite, Neo4j, Solana, Ethereum, EOS & ThreeFold with many more coming soon such as COSMOS, Polkadot, Polygon, SOLID, ActivityPub, Near, Nexus, HIVE, CEPTR Pluggable Protocol, Fediverse, XMPP & many more! :) The majority of these are aimed at building a truly decentralised distributed internet (Web 3.0) and this is also the aim of the OASIS API. If you wish to get involved and help build out any of these providers or any other you would like to see integrated please get in touch here: <https://t.me/ourworldthegamechat>.

WEB 4 OASIS API is a fully distributed decentralised fault tolerant load balanced integrated API that runs across the full Internet acting as an abstraction layer over everything and serves as a network of networks. It is unity consciousnes expressed within the technical sphere. [The OASIS API is a global universal API that aims to connect anything to everything](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK#the-universal-api-to-connect-everything-to-everything--no-more-silos-walled-gardens-) to eliminate walled gardens/silos.

The core OASIS (Open Advanced Sensory Immersion System) API that powers Our World/One World and manages the central profile/avatar/karma system that other satellite apps/games/sites/services plug into it and share. This allows karma to be earnt in the satellite apps/games by doing good deeds or progressing self help apps for example.

### Best Of All Worlds

Just like a team of people, different tech has various strengths and weaknesses, by integrating them together so they work as one unified co-ordinated team, you eliminate all weaknesses and then have the best of all worlds, the whole is greater than the sum of the parts. It harnesses the best of each provider so the OASIS uses the strengths of each provider to the maximum and removes all weaknesses, it automatically uses the most appropriate provider or providers for any given use case.

### Maximum Interopability/Aggregation

One of the core design goals of the OASIS is maximum interoperability (to remove all silos and walled gardens) to the point everything merges into one (the singularity) and also to be super powerful but super easy and intuitive to use.

The WEB4 OASIS API connects & Integrates everything (all of WEB 2 & WEB 3) including all blockchains, holochain, IPFS, databases, cloud etc into one fully unified API that is an abstraction layer over everything.

The whole point of the OASIS API is to allow everything to be fully interoperable so data can be shared between any provider, the architecture opens the doors for many more use cases like importing and exporting your data between providers, aggregating all your data to remove all silos so better sense making and AI machine learning can be made to analyse and to make predictions, smart contract interoperability, etc

### HOT Swappable Plugin Architecture

The OASIS API features a HOT Swappable Plugin Architecture meaning any OASIS Provider can be deployed and used at runtime without having to re-compile or deploy a ONODE (OASIS Node).

### Full Redundancy/Zero Downtime/Impossible To Shutdown

It also allows full data redundancy and for it to be network independent so if one network goes down it can automatically switch to the next fastest node in your area regardless of what network it is on. So it will be impossible to shut the OASIS down, you need to shut the entire Internet down, goodluck with that! ;-)

### HTTP REST/gRPC/GraphQL/CLI/Native Endpoints

The OASIS API currently has a HTTP REST API, CLI & Native endpoints. gRPC & GraphQL are coming soon...

### Javascript, Unity & C# Packages

The OASIS API currently has a [Javascript](#javascript), [Unity](#unity) & [C#](#csharp) package, more are coming soon...

### Avatar API

The OASIS API features a powerful Avatar SSO (Single Sign On) API allowing ONE login across all your sites, games, apps, services, etc across all devices and platforms for your OASIS Avatar where you have FULL control of ALL of your data right down to the individual field level and whether each field is Replicated/Shared (ReadOnly) or Shared (ReadWrite). You no longer need to remember multiple login details, you can have just ONE login (avatar), that follows you everywhere and you have FULL control of. You choose where your data is stored and who has access to it. This avatar is the digital twin of YOU and allows you to earn/lose karma through the Karma API.

### Karma API

The OASIS API also has a powerful Karma API where your avatar (YOU) can earn and lose karma across any OAPP (OASIS App) that is integrated into the OASIS API (websites, apps, games, services, etc). You can earn karma for picking up litter, recycling, going green, helping people, eating/drinking healthily, improving your self or the enviroment, donating to chairty, volunteering for good causes, planting trees, progressing in self help apps, medidation, yoga, mindfulness, spending time in nature, etc. You lose karma for dropping liter, being abusive online, not eating healthily.

This karma is then redeemed for real world goods & services such as for a free smoothie, yoga class, retreat etc.

It also unlocks new gifts and super powers for your avatar in the Our World/One World games that plug into the API, they are the first worlds of the new upcoming OASIS Omniverse (network of metaverses).

### Full Accountability/Zero Crime/Dark Net Prove

The extra benefit of this is that everyone is fully accountable for their actions where their karma & how they earnt/lost it is fully visible to all. There can be no hiding in the OASIS, it makes crime & the dark net impossible!

### Data API

It also features the powerful [Data API](https://www.ourworldthegame.com/single-post/@oasisomniverse/web4-api-v2-3-1-released-with-new-improved-data-api-and-lots-more) allowing data to be shared between the above providers giving full interoperability. It also has powerful features such as auto-fail over, auto-load balancing and auto-replication across the providers so if one node goes down in your local area it will automatically switch to the next fastest node in your area independent of the network it belongs to, this way the OASIS API never has any downtime and will always be super fast and not reliant on only one network. This also applies for all the other API's such as the Avatar API etc. With unity consciousness the possibilities are limitless!

### Future Prove! Never Need To Learn A New Tech Stack/Language Again

The OASIS API is very intuitive and easy to use hiding away the complexities of the lower-level networks/protocols/platforms/API's but at the same time gives full power and control to power users who wish to dive deeper into the lower-level tech. This also means you do not need to keep learning new tech/APIs/programming languages etc, from now on you only ever need to use the very intuitive powerful OASIS API and the rest is taken care of for you! Also, even if a newer version of one network/API comes out like Holochain RSM or Ethereum 2, you do not need to do anything to port your app to the latest version, the OASIS will take care of this for you. This saves you valuable time to focus on bringing your idea to life! Happy Days! :)

### SEEDS API

The OASIS API also has a SEEDS API allowing people to earn karma for donating and paying with Seeds (a new currency based on re-generating the planet) as well as when they invite or join Seeds. Read more here: <https://joinseeds.earth/>

### Keys/Wallet API

Finally it also features a new powerful Keys/Wallets API, which allows public private keys to be linked to your avatar per provider and private keys are only stored locally. Public keys and the rest of the wallet are stored on any provider (and auto-replicated across providers). Using the Avatar SSO you can also login using any of your public keys linked to your avatar (as well as either your username or email). You can also transfer tokens using any of these 3 so you do not need to ever worry about long meaningless public keys!

All of your wallets, bank accounts, PayPal, etc can be linked to your aggregated OASIS Wallet so you can see your full balance of assets and easily transfer between ANY of them with just one cick, gone are the days of having to painfully manage and transfer between mutiple wallets just to get access to your funds!

Because of the auto replication the private keys are automatically backed up to your local devices and can automatically sync between them so if you get a new device it can automatically sync with it, a bit like a decentralised offline cloud.

You will never lose your keys again! ;-)

It can also then sync your public key and wallet address etc when you go back online. With this architecture it opens the doors to many new use cases...

### Works Offline/Local Networks (LAN, Bluetooth, Mesh Networks)

This same technology works across all of the API's (Avatar, Data, etc) so you can work offline if your connection to the internet goes down and will automatically sync once it goes back online. It even allows you to network over LAN, Bluetooth, Mesh Networks, etc.

### OAPPS - Write Once, Deploy Everywhere

OAPP's (OASIS Apps) that use the OASIS API can be deployed anywhere across any network, platform, API or protocol. This includes all of WEB2 (clouds, databases, etc),  Holochain, every popular blockchain, ActivityPub, IPFS, SOLID & many more... check the growing list of providers supported below.

Gone are the days of having to write multiple dApps and having to spend lots of time setting up your dev environment for each one such as the network, wallet, account, etc. The OASIS API can manage all of this for you with one simple to use UI (web, desktop and Unity versions planned). The Unity UI will in fact be Our World and will be the most feature rich through the XR interface.

You can also of course fully manage every feature and option through the API itself so you could even write your own UI to it if you so wished.

### One API To Rule Them All - The GOD Protocol/API

The OASIS API will allow you to connect into everything including e-commerce, trading, security, social networks, blockchains, holochain networks, etc. regardless of where they are running (WEB2 or WEB3/IoT).

### Full Smart Contract Interoperability

Smart Contracts will be supported across any of the supported providers (network/platform/API/protocol), so you only need to write the contract once for your OAPP and then deploy your OAPP once and it will then take care of deploying and running your app/smart contract across all supported providers (network/platform/API/protocol).

### Powerful Pick n Mix & Plug n Play UI Components

Soon you will also have a very powerful intuitive UI allowing anyone to build an OAPP through a simple intuitive to use drag n drop interface plugging together the various components (web, unity, unreal, metaverse & more) you need allowing you to focus on your ideas rather than on how to implement them. This will lower the barrier to entry for non-technical people, the perfect low-code solution!

### WEB/2D/3D/AR/VR/IR/Map/Meta Visusalization

Each OAPP can have a Web, 2D, 3D AR, 3D VR, 3D Map, 3D IR ([Infinite Reality](https://www.ourworldthegame.com/single-post/beyond-xr-is-ir-infinite-reality)), 2D Map & Meta View. You will be able to switch between these at run-time.

### Our World Geo-Location/AR/IR/Map UI (Game Of Games Engine)

[Our World](http://www.ourworldthegame.com) is the first world in the infinite Omniverse (what comes after Metaverse). Our World also acts as the UI to the OASIS API allowing the various OAPP’s to have a 3D object/2D sprite representation on the 3D map of the world. They can then view meta data about the app as well as launch the app from within Our World (phase 1 of The OASIS you see in Ready Player One). Through the OASIS API people have a full geo-location API allowing them to fully control the 3D map, add quests, routes, sub-games, AR hotspots, and so much more. One possible use case would be Smart Cities amongst many more.

[Our World](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK#our-world-overview) is an exciting immersive next generation 3D XR/IR (Infinite Reality) educational game/platform/social network/ecosystem teaching people on how to look after themselves, each other and the planet using the latest cutting-edge technology. It teaches people the importance of real-life face to face connections with human beings and encourages them to get out into nature using Augmented Reality similar to Pokémon Go but on a much more evolved scale. This is our flagship product and is our top priority due to the massive positive impact it will make upon the world...

It is the XR/IR Gamification layer of the new interplanetary operating system & the new internet (Web 3.0), which is being built by the elite technical wizards stationed around the world. This will one day replace the current tech giants such as Google, FaceBook, etc and act as the technical layer of the New Earth, which is birthing now.  Unlike the current tech giants who's only aim is to ruthlessly maximize profits at the expense of people and the planet (as well as spying, exploitation, censorship & social engineering), our technology is based on true love & unity consciousness where money and profits are not our aim or intention, our aim and intention is to heal the entire planet & human race so we can all live in harmony with each other. It is a 5th dimensional and ascension training platform, teaching people vital life lessons as well as acting as a real-time simulation of the real world.

Our World is built on top of the de-centralised, distributed nextgen internet known as Holochain (but bridges to all other WEB2 & WEB3 sites/apps/games through the OASIS API).

The first phase of Our World will be a de-centralised distributed XR Gamified 3D Map replacement for Google Maps along with the Avatar/Profile/Karma & OASIS API system. The satellite apps/games will be able to create their own 2D/3D object to appear on the real-time 3D map.

[Check out the site](http://www.ourworldthegame.com) for more info.

Read another more refined (and updated) summary on the github repo code base for the Our World Smartphone AR Prototype:<br>
<https://github.com/NextGenSoftwareUK/Our-World-Smartphone-Prototype-AR>

### IR (Infinite Reality) Ready

IR is what comes after AR, VR & XR. It is where the boundary between real and the virtual become one. More coming soon... ;-)

### One World Open World MMO (VR) (Game Of Games Engine)

One World is Our World's cousin and is a Open World MMORPG set in the past allowing people to build whatever they can imagine unleashing their FULl creativity & potential! It uses bio-feedback technology allowing you to move objects with your mind with real force powers! :) You can also see other players avatar/chakras in real-time and so much more! You can medidate to make it rain to water your crops or to help your camp fire burn brighter!

One World will be the first AAA MMO game and 2D/3D Social Network to run on HoloChain and the Blockchain. It will also be the first to integrate a social network with a MMO game/platform as well as all of these technologies and devices together. As with the rest of the game, it will be leading the way in what can be done with this NextGen Technology for the benefit and upliftment of humanity.

More news on this soon...

### XR/IR Unified Interface To The World

Our World & One World are like the XR/IR Unified Interface into all of these hApps/dAps/Websites/apps/games (this is the Operating System part of it), it's a bit like the XR UI front-end to Holochain/Blockchains/WEB2 where you can view and launch any app/website/game from inside it but they integrate much more deeper than that through the OASIS API/Profile/Avatar/Karma system where they all share the central avatar/profile and can all add/subtract the profiles/avatars karma.

Both One World (desktop/console) & Our World (smartphone) players can interact in real-time through time portals and much more...

### ARC/HoloMap/Synergy Engine Integration

We will be implementing the ARC (Augmented Reality Computer) Membrane allowing the revolutionary next-gen operating system to fully interface & integrate with the 3D Map & Avatar/Karma system as well as render its own 3D interfaces and 2D HUD overlays on top of the map, etc.

We will also port HoloMap (previously called Noomap) to Unity and will implement a Synergy Engine allowing people to easily find and match solutions/desires/passions and to also find various solution providers, which again will be fully integrated with the 3D Map & Avatar/Karma system.

### WEB 5 STAR OASIS Omniverse Interoperable Metaverse Low Code Generator

[The WEB 5 STAR OASIS Omniverse Interoperable Metaverse Low Code Generator](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK#web5-star-odk) is built on top of the OASIS API and aggregates all the worlds data and expresses it within a cyberspace ontology using a cutting edge custom built ORM (Object Relational Mapper) called COSMIC. The STAR Omniverse is both a simulation & game of life and aggregates all metaverses into one fully integrated unified platform. It is also a fully integrated immersive interoperable metaverse Low Code Generator and soooooo much more.... ;-)

It connects and integrates all metaverses together through the SSO Avatar/Karma system (part of the OASIS API). It is also a fully interoperable Metaverse Low Code Generator (connecting all WEB 2 and WEB 3 together) through the WEB 4 OASIS API.

The STAR ODK, the heart of the OASIS can even compile OAPP's to native code for each platform, provider, network, etc. For example, for Holochain Provider it dynamically generates the low-level Rust code, which acts as the DAL (Data Access Layer). It also dynamically generates the C# code that runs on top of it abstracting away the lower-level complexities and this acts as the BLL (Business Logic Layer). This has the additional benefit that you can now debug your app logic in C#, something you cannot do in rust. It also allows you to have the best of both worlds by giving you access to both rust and C# libraries. The possibilities are endless, time to unleash YOUR full potential!

### AI/Machine Learning Over All Of World's Aggregated Data

Both WEB 4 & WEB 5 use machine learning AI to analyse all of the worlds data to generate useful insights, predictions & so much more!

### Summary

To summarize, WEB4 OASIS API aggregates all of the worlds data into a fully unified API to allow better sense making to made, which then feeds into WEB5 STAR, which expresses it in a cyberspace ontology and connects the worlds data to the rest of the COSMOS and Galaxy... ;-)

<a name="web4-oasisapi-benefits"></a>

## Benefits Of Building On The WEB4 OASIS API

- **Integrate any WEB2 or WEB3 tech into your (web)app without having to learn or worry about new tech stacks/languages (the OASIS API hides all the complexity away so you can focus on creating your dream app!).**

- **No need to worry about how different blockchains or WEB2 and WEB3 can talk and integrate with each other, the OASIS handles all this for you!**

- **Future prove so when any new language/tech comes out such as Ethereum2 etc, these will be automatically added to the OASIS API for FREE, you will have FREE upgrades for life!**

- **SSO Avatar.**

- **Karma API (full accountability/zero crime/dark net prove) System.**

- **Maximum Integration & Interoprability.**

- **Auto Load-balancing.**

- **Auto Fail-over.**

- **Auto Replication.**

- **Best Of All Worlds.**

- **Maximum Interopability/Aggregation.**

- **HOT Swapable PlugIn Architecture.**

- **HTTP REST/gRPC/GraphQL/CLI/Native Endpoints.**

- **Javascript, Unity & C# Packages - More Coming...**

- **Write Once, Deploy Everywhere Now & Forever.**

- **One API To Rule Them All - The GOD Protocol/API.**

- **Full Smart Contract Interoperability.**

- **AI/Machine Learning Over All Of World's Aggregated Data.**

- **Triple Level Quantum Resistant Encryption.**

- **Intelligent Key Management/Backups/Redundancy (never lose your keys again!).**

- **Full Redundancy/Zero Downtime/Impossible To Shutdown!**

- **Zero Lag.**

- **Infinite Players Online At Same Time.**

- **Decentralised Distributed P2P Networking.**

- **Can Work Off-line (will automatically sync once online again).**

- **When Offline Can Still Sync And Work Over LAN, Bluetooth, Mesh Networks, etc.**

- **Agent Centric (User owns and stores own data).**

- **WEB/2D/3D/AR/VR/IR/Map/Meta Visusalization.**

- **Our World Geo-Location/AR/IR/Map UI (Game of Games Engine).**

- **One World Open World MMO (VR) UI (Game of Games Engine).**

- **Powerful Pick n Mix & Plug n Play UI Components.**

- **Smart City Ready.**

- **Bio-feedback Ready.**

- **Synergy Engine Ready.**

- **IR (Infinite Reality) Ready.**

- **WEB5 Omniverse/Metaverse Ready.**

- **Plus Much More!**

Check out more info below:<br><br>
[The Power Of The OASIS API](https://drive.google.com/file/d/1nnhGpXcprr6kota1Y85HDDKsBfJHN6sn/view?usp=sharing) <br>
[What Is WEB4 & WEB5 Really?](https://www.ourworldthegame.com/single-post/what-is-web4-web5-really) <br>
[First Production Release Of The WEB4 OASIS API](https://www.ourworldthegame.com/single-post/first-production-ready-release-of-@oasisomniverse/web4-api-more) <br>
[Annoucing WEB5 STAR ODK/HDK/COSMIC](https://www.ourworldthegame.com/single-post/announcing-star-odk-hdk-cosmic)  <br>
[STAR ODK/HDK/COSMIC/OASIS API/Our World Update](https://www.ourworldthegame.com/single-post/star-odk-hdk-cosmic-oasis-api-our-world-update) <br>
[Main WEB4 OASIS API & WEB5 STAR Repo](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK)

<a name="web4-oasisapi-packages"></a>

## WEB 4 OASIS API Packages

### Javascript

<https://www.npmjs.com/package/@oasisomniverse/web4-api> \
<https://github.com/NextGenSoftwareUK/OASIS-API-Javascipt-Package>

### Unity

<https://github.com/NextGenSoftwareUK/OASIS-API-Unity-Package>

<a name="csharp"></a>

### C #

<https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK>

<a name="get-involved"></a>

## Do You Want To Get Involved?

We are always looking for people to jump in and get involved, you do not need to be an existing coder, we can help you with that... you just need a willingness to learn and to have an open heart, we are always more interested with what is in your heart rather than your head! ;-)

The whole world is the Our World team, hence the name... ;-) It is not our project; it is all of humanities...

We also offer FREE training and apprenticeship program with the NextGen Developer Training Programmes.  We will teach you all we know over time and you get to work on this real live commercial codebase rather than wasting time working on throw away dummy apps as most training offers. No previous skills/experience required and is open to everyone, but especially for all disadvantaged people including special needs, homeless, unemployed, prison inmates, kids on the streets etc. We want to help the people the world has forgotten and for people who have stopped believing in themselves, we **BELIEVE IN YOU** and in time you will again too. Everyone has a gift for the world, and we will help you find yours… Find out more by checking out the links below:

<a href="https://c8119036-8b0a-4498-ab07-331841f19b4b.filesusr.com/ugd/4280d8_ad8787bd42b1471bae73003bfbf111f7.pdf">NextGen Developer Training Programme</a><br>
<a href="https://c8119036-8b0a-4498-ab07-331841f19b4b.filesusr.com/ugd/4280d8_999d98ba615e4fa6ab4383a415ee24c5.pdf">NextGen Junior Developer Training Programme</a>

We are looking for Web Devs (with any of these: react, angular, vue, js, html, css), Unity Devs & C# Devs.

If anyone is interested in developing this game/platform, then we would LOVE to hear from you! 😊 There will be opportunities for people to own shares and/or cryptocurrency (as well as other unique perks such as premium locations in both the geolocation and VR versions, personal or business service spotlights, free lifetime access to all premium paid services, massive karma points (allowing your avatar to progress to more advanced stages in the game unlocking new exciting quests, areas to explore & new special abilities/superpowers) plus lots more!) based on the input they are willing to provide.  

Thank you and we hope we find interest from people to join us on this exciting incredible journey.

**Want to make a difference in the world?**

**What will be your legacy?**

**Ready to be a hero?**

If the answer is YES, then please [proceed to here](https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK/wiki/So-You-Want-To-Get-Involved%3F-Ready-To-Be-A-Hero%3F)...

<a href="https://drive.google.com/file/d/1b_G08UTALUg4H3jPlBdElZAFvyRcVKj1/view">Dev Requirements To Join The Our World Tribe</a><br>
<a href="https://drive.google.com/file/d/12pCk20iLw_uA1yIfojcP6WwvyOT4WRiO/view?usp=sharing">The Our World Mission (Summary)</a><br>
<http://www.ourworldthegame.com><br>
<http://oasisplatform.world/swagger><br>
<https://github.com/NextGenSoftwareUK/Our-World-OASIS-API-HoloNET-HoloUnity-And-.NET-HDK><br>
<http://www.gofundme.com/ourworldthegame><br>

<http://www.nextgensoftware.co.uk><br>
<http://www.yoga4autism.com><br>

<https://youtu.be/wdYa5wQUfrg><br>
<https://www.youtube.com/watch?v=2oY4_LZBW4M&t=3s><br>
<https://www.youtube.com/watch?v=rvNJ6poMduo&t=5s><br>
<https://www.youtube.com/watch?v=zyVmciqD9rs><br>
<https://www.youtube.com/watch?v=SB97mvzJiRg&t=3s><br>

**TOGETHER WE CAN CREATE A BETTER WORLD**

In Love, Light & Hope,<br>
The Our World Tribe

## How To Use

This is **v2.0.0** - a full rewrite. It is isomorphic (works the same in Node.js 18+
and in the browser), has zero dependencies (uses the global `fetch`), and covers
every controller on the OASIS2 ONODE WebAPI - not just Avatar/Karma/Data/NFT
(32 modules, 485 operations).

### Install

```bash
npm install @oasisomniverse/web4-api
```

### Quickstart

```js
const { OASISClient } = require('@oasisomniverse/web4-api'); // or: import { OASISClient } from '@oasisomniverse/web4-api'

const oasis = new OASISClient({ baseUrl: 'https://api.oasisweb4.one' });

const { isError, message, session } = await oasis.auth.login({
  username: 'me@example.com', // username or email both work
  password: 'correct-horse-battery-staple'
});
if (isError) throw new Error(message);

// Every controller is exposed as oasis.<lowerCamelName> - e.g.:
const karma = await oasis.karma.getKarmaForAvatar({ avatarId: session.avatarId });
```

### Full documentation

- **[docs/getting-started.md](./docs/getting-started.md)** - install, client options, the calling convention, response shape.
- **[docs/auth.md](./docs/auth.md)** - login/register/logout, session handling in the browser vs. serverless/Node.
- **[docs/README.md](./docs/README.md)** - full module reference: every one of the 32 modules / 485 operations, with HTTP verb, route, route params, and an example call for each.

Docs are generated from the actual code (`scripts/generate-docs.js` parses
`src/modules/*.js`), so they can't drift from what's actually implemented.
After running `node scripts/generate-modules.js` against an updated
`endpoints.json`, re-run `node scripts/generate-docs.js` to refresh `docs/`.

`src/modules/Auth.js` is the one hand-written module (everything else is
generated) - see [docs/auth.md](./docs/auth.md) for details.
