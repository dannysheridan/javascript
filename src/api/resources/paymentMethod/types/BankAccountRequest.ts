/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface BankAccountRequest {
    id?: Mercoa.BankAccountId;
    bankName: string;
    routingNumber: string;
    accountNumber: string;
    accountType: Mercoa.BankType;
}
