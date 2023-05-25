/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const PaymentMethodUpdateRequest: core.serialization.ObjectSchema<
    serializers.PaymentMethodUpdateRequest.Raw,
    Mercoa.PaymentMethodUpdateRequest
> = core.serialization.object({
    custom: core.serialization
        .lazyObject(async () => (await import("../../..")).CustomPaymentMethodUpdateRequest)
        .optional(),
});

export declare namespace PaymentMethodUpdateRequest {
    interface Raw {
        custom?: serializers.CustomPaymentMethodUpdateRequest.Raw | null;
    }
}
