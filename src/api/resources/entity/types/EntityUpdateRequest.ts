/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface EntityUpdateRequest {
    foreignId?: string;
    /** Email inbox address. Do not inclue the @domain.com */
    emailTo?: string;
    /** Email inbox alias addresses. Used when forwarding emails to the emailTo address from an alias. Include the full email address. */
    emailToAlias?: string[];
    ownedByOrg?: boolean;
    accountType?: Mercoa.AccountType;
    profile?: Mercoa.ProfileRequest;
}
