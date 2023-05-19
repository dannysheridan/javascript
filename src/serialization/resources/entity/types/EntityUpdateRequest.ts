/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const EntityUpdateRequest: core.serialization.ObjectSchema<
    serializers.EntityUpdateRequest.Raw,
    Mercoa.EntityUpdateRequest
> = core.serialization.object({
    foreignId: core.serialization.string().optional(),
    emailTo: core.serialization.string().optional(),
    emailToAlias: core.serialization.list(core.serialization.string()).optional(),
    ownedByOrg: core.serialization.boolean().optional(),
    accountType: core.serialization.lazy(async () => (await import("../../..")).AccountType).optional(),
    profile: core.serialization.lazyObject(async () => (await import("../../..")).ProfileRequest).optional(),
    isPayor: core.serialization.boolean().optional(),
    isPayee: core.serialization.boolean().optional(),
});

export declare namespace EntityUpdateRequest {
    interface Raw {
        foreignId?: string | null;
        emailTo?: string | null;
        emailToAlias?: string[] | null;
        ownedByOrg?: boolean | null;
        accountType?: serializers.AccountType.Raw | null;
        profile?: serializers.ProfileRequest.Raw | null;
        isPayor?: boolean | null;
        isPayee?: boolean | null;
    }
}
