// Hand-written type declaration for src/modules/HerzId.js
import type { OASISResponse } from '../core/types';

export declare class HerzIdModule {
  constructor(http: unknown);

  /** POST api/herzid/register — assign a HerzID to the authenticated avatar */
  register(args?: Record<string, any>): Promise<OASISResponse>;

  /** POST api/herzid/vouch — gift a vouch to another member (requires herzId in body) */
  vouch(args?: Record<string, any>): Promise<OASISResponse>;

  /** GET api/herzid/verify/{herzId} — public: verify a HerzID QEA seal [AllowAnonymous] */
  verify(args: { herzId: string } & Record<string, any>): Promise<OASISResponse>;

  /** GET api/herzid/profile — return HerzID profile for the authenticated avatar */
  profile(args?: Record<string, any>): Promise<OASISResponse>;

  /** POST api/herzid/set-clearance — admin: update clearance level (requires clearance >= 8) */
  setClearance(args?: Record<string, any>): Promise<OASISResponse>;

  /** GET api/herzid/vouch-chain/{herzId} — public: walk vouching chain upward [AllowAnonymous] */
  vouchChain(args: { herzId: string } & Record<string, any>): Promise<OASISResponse>;

  /** GET api/herzid/vouches-issued — all members this authenticated avatar has vouched for */
  vouchesIssued(args?: Record<string, any>): Promise<OASISResponse>;

  /** POST api/herzid/ghost-check/{herzId} — admin: ghost-account detection (requires clearance >= 8) */
  ghostCheck(args: { herzId: string } & Record<string, any>): Promise<OASISResponse>;
}
