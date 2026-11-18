// Hand-written contract for the self-only revision-checked profile API.
import type { OASISResponse } from '../core/types';

export interface AvatarProfileRevision {
  readonly version: number;
  readonly versionId: string;
}
export interface AvatarProfileChanges {
  title?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string;
  address?: string | null;
}
export interface AvatarProfileSnapshot {
  readonly avatarId: string;
  readonly title: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly username: string;
  readonly email: string;
  readonly address: string;
  readonly avatarRevision: AvatarProfileRevision;
  readonly detailRevision: AvatarProfileRevision;
}
export interface AvatarProfileDocument {
  readonly profile: AvatarProfileSnapshot;
  readonly providerType: string;
}
export interface AvatarProfileEdit {
  avatarRevision: AvatarProfileRevision;
  detailRevision: AvatarProfileRevision;
  changes: AvatarProfileChanges;
  /** Concrete serving provider returned when this profile was opened. */
  providerType: string;
}
export declare class ProfileModule {
  constructor(http: unknown);
  getProfile(options?: { providerType?: string; token?: string }): Promise<OASISResponse<AvatarProfileDocument>>;
  applyProfile(edit: AvatarProfileEdit, options?: {
    operationId?: string; idempotencyKey?: string; token?: string;
  }): Promise<OASISResponse<AvatarProfileDocument>>;
}
