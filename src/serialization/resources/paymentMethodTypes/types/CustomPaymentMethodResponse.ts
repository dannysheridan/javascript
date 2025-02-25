/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CustomPaymentMethodResponse: core.serialization.ObjectSchema<
    serializers.CustomPaymentMethodResponse.Raw,
    Mercoa.CustomPaymentMethodResponse
> = core.serialization
    .object({
        foreignId: core.serialization.string(),
        accountName: core.serialization.string().optional(),
        accountNumber: core.serialization.string().optional(),
        schemaId: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodSchemaId),
        schema: core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodSchemaResponse),
        data: core.serialization.record(core.serialization.string(), core.serialization.string()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodBaseResponse));

export declare namespace CustomPaymentMethodResponse {
    interface Raw extends serializers.PaymentMethodBaseResponse.Raw {
        foreignId: string;
        accountName?: string | null;
        accountNumber?: string | null;
        schemaId: serializers.PaymentMethodSchemaId.Raw;
        schema: serializers.PaymentMethodSchemaResponse.Raw;
        data: Record<string, string>;
    }
}
