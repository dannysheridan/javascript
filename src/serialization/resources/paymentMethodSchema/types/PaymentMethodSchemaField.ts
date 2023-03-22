/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const PaymentMethodSchemaField: core.serialization.ObjectSchema<
    serializers.PaymentMethodSchemaField.Raw,
    Mercoa.PaymentMethodSchemaField
> = core.serialization.object({
    name: core.serialization.string(),
    displayName: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodSchemaFieldType),
    optional: core.serialization.boolean(),
    options: core.serialization.string().optional(),
});

export declare namespace PaymentMethodSchemaField {
    interface Raw {
        name: string;
        displayName?: string | null;
        type: serializers.PaymentMethodSchemaFieldType.Raw;
        optional: boolean;
        options?: string | null;
    }
}
