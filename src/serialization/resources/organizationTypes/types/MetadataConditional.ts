/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const MetadataConditional: core.serialization.ObjectSchema<
    serializers.MetadataConditional.Raw,
    Mercoa.MetadataConditional
> = core.serialization.object({
    hasDocument: core.serialization.boolean().optional(),
    paymentSourceTypes: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).PaymentMethodType))
        .optional(),
    paymentSourceCustomSchemaIds: core.serialization.list(core.serialization.string()).optional(),
    paymentDestinationTypes: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).PaymentMethodType))
        .optional(),
    paymentDestinationCustomSchemaIds: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace MetadataConditional {
    interface Raw {
        hasDocument?: boolean | null;
        paymentSourceTypes?: serializers.PaymentMethodType.Raw[] | null;
        paymentSourceCustomSchemaIds?: string[] | null;
        paymentDestinationTypes?: serializers.PaymentMethodType.Raw[] | null;
        paymentDestinationCustomSchemaIds?: string[] | null;
    }
}
