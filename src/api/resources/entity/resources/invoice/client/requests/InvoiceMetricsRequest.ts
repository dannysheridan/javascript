/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../..";

export interface InvoiceMetricsRequest {
    /**
     * Filter vendors by name. Partial matches are supported.
     */
    search?: string;
    /**
     * Filter invoices by vendor ID.
     */
    vendorId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Filter invoices by assigned approver user ID.
     */
    approverId?: Mercoa.EntityUserId | Mercoa.EntityUserId[];
    /**
     * Filter invoices by invoice ID.
     */
    invoiceId?: Mercoa.InvoiceId | Mercoa.InvoiceId[];
    /**
     * Invoice status to filter on
     */
    status?: Mercoa.InvoiceStatus | Mercoa.InvoiceStatus[];
    /**
     * Start date for invoice dueDate filter.
     */
    dueDateStart?: Date;
    /**
     * End date for invoice dueDate filter.
     */
    dueDateEnd?: Date;
    /**
     * Start date for invoice created on date filter.
     */
    createdDateStart?: Date;
    /**
     * End date for invoice created date filter.
     */
    createdDateEnd?: Date;
    /**
     * Currency to filter on
     */
    currency: Mercoa.CurrencyCode;
}
