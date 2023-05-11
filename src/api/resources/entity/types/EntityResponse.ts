/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface EntityResponse {
    id: Mercoa.EntityId;
    foreignId?: string;
    emailTo?: string;
    emailToAlias?: string[];
    ownedByOrg: boolean;
    accountType: Mercoa.AccountType;
    name: string;
    email: string;
    profile: Mercoa.ProfileResponse;
    status: Mercoa.EntityStatus;
    acceptedTos: boolean;
    createdAt: Date;
    updatedAt: Date;
}
