/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface PaymentMethodsRequest {
    payerPayments: Mercoa.PaymentRailRequest[];
    backupDisbursements: Mercoa.PaymentRailRequest[];
    vendorDisbursements: Mercoa.PaymentRailRequest[];
}
