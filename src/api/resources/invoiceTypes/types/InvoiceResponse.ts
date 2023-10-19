/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface InvoiceResponse {
    id: Mercoa.InvoiceId;
    status: Mercoa.InvoiceStatus;
    /** Total amount of invoice in major units */
    amount?: number;
    currency?: Mercoa.CurrencyCode;
    /** Date the invoice was created. */
    invoiceDate?: Date;
    /** Date when funds will be deducted from payer's account. */
    deductionDate?: Date;
    /** Date of funds settlement. */
    settlementDate?: Date;
    /** Due date of invoice. */
    dueDate?: Date;
    invoiceNumber?: string;
    noteToSelf?: string;
    serviceStartDate?: Date;
    serviceEndDate?: Date;
    payerId?: Mercoa.EntityId;
    payer?: Mercoa.EntityResponse;
    paymentSource?: Mercoa.PaymentMethodResponse;
    paymentSourceId?: Mercoa.PaymentMethodId;
    vendorId?: Mercoa.EntityId;
    vendor?: Mercoa.EntityResponse;
    paymentDestination?: Mercoa.PaymentMethodResponse;
    paymentDestinationId?: Mercoa.PaymentMethodId;
    /** True if the payment destination has been confirmed by the vendor. False if the payment destination has been set (for example, a check to an address) but has not been confirmed by the vendor. */
    paymentDestinationConfirmed: boolean;
    /** True if the invoice has documents attached. */
    hasDocuments: boolean;
    comments?: Mercoa.CommentResponse[];
    lineItems?: Mercoa.InvoiceLineItemResponse[];
    approvers: Mercoa.ApprovalSlot[];
    approvalPolicy: Mercoa.ApprovalPolicyResponse[];
    /** Metadata associated with this invoice. */
    metadata: Record<string, string>;
    /** Entity user who created this invoice. */
    createdBy?: Mercoa.EntityUserResponse;
    /** If the invoice failed to be paid, this field will be populated with the type of failure. */
    failureType?: Mercoa.InvoiceFailureType;
    processedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    /** Fees associated with this invoice. */
    fees?: Mercoa.InvoiceFeesResponse;
}
