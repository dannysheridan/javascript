/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const EntityResponse: core.serialization.ObjectSchema<serializers.EntityResponse.Raw, Mercoa.EntityResponse> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).EntityId),
        name: core.serialization.string(),
        email: core.serialization.string(),
        foreignId: core.serialization.string().optional(),
        emailTo: core.serialization.string().optional(),
        emailToAlias: core.serialization.list(core.serialization.string()).optional(),
        isCustomer: core.serialization.boolean(),
        accountType: core.serialization.lazy(async () => (await import("../../..")).AccountType),
        profile: core.serialization.lazyObject(async () => (await import("../../..")).ProfileResponse),
        status: core.serialization.lazy(async () => (await import("../../..")).EntityStatus),
        acceptedTos: core.serialization.boolean(),
        isPayor: core.serialization.boolean(),
        isPayee: core.serialization.boolean(),
        ownedByOrg: core.serialization.boolean(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace EntityResponse {
    interface Raw {
        id: serializers.EntityId.Raw;
        name: string;
        email: string;
        foreignId?: string | null;
        emailTo?: string | null;
        emailToAlias?: string[] | null;
        isCustomer: boolean;
        accountType: serializers.AccountType.Raw;
        profile: serializers.ProfileResponse.Raw;
        status: serializers.EntityStatus.Raw;
        acceptedTos: boolean;
        isPayor: boolean;
        isPayee: boolean;
        ownedByOrg: boolean;
        createdAt: string;
        updatedAt: string;
    }
}
