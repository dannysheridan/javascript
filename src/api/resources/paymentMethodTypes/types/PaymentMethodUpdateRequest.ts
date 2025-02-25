/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

/**
 * Update a payment method. for non custom payment methods.
 */
export type PaymentMethodUpdateRequest =
    | Mercoa.PaymentMethodUpdateRequest.Custom
    /**
     * Only defaultSource, defaultDestination, and accountName can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.BankAccount
    /**
     * Only defaultSource and defaultDestination can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.Card
    /**
     * Only defaultSource and defaultDestination can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.Check;

export declare namespace PaymentMethodUpdateRequest {
    interface Custom extends Mercoa.CustomPaymentMethodUpdateRequest {
        type: "custom";
    }

    interface BankAccount extends Mercoa.BankAccountUpdateRequest {
        type: "bankAccount";
    }

    interface Card extends Mercoa.PaymentMethodBaseRequest {
        type: "card";
    }

    interface Check extends Mercoa.PaymentMethodBaseRequest {
        type: "check";
    }
}
