/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const PaymentMethodResponse: core.serialization.ObjectSchema<
    serializers.PaymentMethodResponse.Raw,
    Mercoa.PaymentMethodResponse
> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodId),
    type: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodType),
    bankAccount: core.serialization.lazyObject(async () => (await import("../../..")).BankAccountResponse).optional(),
    check: core.serialization.lazyObject(async () => (await import("../../..")).CheckResponse).optional(),
    card: core.serialization.lazyObject(async () => (await import("../../..")).CardResponse).optional(),
    custom: core.serialization
        .lazyObject(async () => (await import("../../..")).CustomPaymentMethodResponse)
        .optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
});

export declare namespace PaymentMethodResponse {
    interface Raw {
        id: serializers.PaymentMethodId.Raw;
        type: serializers.PaymentMethodType.Raw;
        bankAccount?: serializers.BankAccountResponse.Raw | null;
        check?: serializers.CheckResponse.Raw | null;
        card?: serializers.CardResponse.Raw | null;
        custom?: serializers.CustomPaymentMethodResponse.Raw | null;
        createdAt: string;
        updatedAt: string;
    }
}
