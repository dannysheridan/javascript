/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface InvoiceFeesResponse {
    /** Fee charged for processing the source payment method. For example, credit card interchange and acquiring fees. */
    sourcePaymentMethodFee: number;
    /** Additional fee charged to the payer. */
    sourcePlatformMarkupFee: number;
    /** Fee charged for processing the destination payment method. For example, postage for a check payment. */
    destinationPaymentMethodFee: number;
    /** Additional fee charged to the payee. */
    destinationPlatformMarkupFee: number;
}
