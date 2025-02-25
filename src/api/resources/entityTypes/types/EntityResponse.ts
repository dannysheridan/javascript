/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface EntityResponse {
    id: Mercoa.EntityId;
    name: string;
    email: string;
    /** The ID used to identify this entity in your system */
    foreignId?: string;
    /** Local-part/username of the email address to which to send invoices to be added to the Invoice Inbox. */
    emailTo?: string;
    /** Email inbox alias addresses. Used when forwarding emails to the emailTo address from an alias. */
    emailToAlias?: string[];
    /** True if this entity has a direct relationship with your organization. */
    isCustomer: boolean;
    accountType: Mercoa.AccountType;
    profile: Mercoa.ProfileResponse;
    status: Mercoa.EntityStatus;
    /** True if this entity has accepted the terms of service. */
    acceptedTos: boolean;
    /** True if this entity can pay invoices. */
    isPayor: boolean;
    /** True if this entity can receive payments. */
    isPayee: boolean;
    /** [DEPRECATED - use isCustomer] - True if this entity has a direct relationship with your organization. */
    ownedByOrg: boolean;
    createdAt: Date;
    updatedAt: Date;
}
