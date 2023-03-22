/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const CardRequest: core.serialization.ObjectSchema<serializers.CardRequest.Raw, Mercoa.CardRequest> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).CardId).optional(),
        type: core.serialization.lazy(async () => (await import("../../..")).CardType),
        brand: core.serialization.lazy(async () => (await import("../../..")).CardBrand),
        lastFour: core.serialization.string(),
        expMonth: core.serialization.string(),
        expYear: core.serialization.string(),
        token: core.serialization.string(),
    });

export declare namespace CardRequest {
    interface Raw {
        id?: serializers.CardId.Raw | null;
        type: serializers.CardType.Raw;
        brand: serializers.CardBrand.Raw;
        lastFour: string;
        expMonth: string;
        expYear: string;
        token: string;
    }
}
