/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const InvoiceStatus: core.serialization.Schema<serializers.InvoiceStatus.Raw, Mercoa.InvoiceStatus> =
    core.serialization.enum_([
        "DRAFT",
        "NEW",
        "PENDING",
        "PAID",
        "CANCELED",
        "REFUSED",
        "APPROVED",
        "ARCHIVED",
        "SCHEDULED",
    ]);

export declare namespace InvoiceStatus {
    type Raw = "DRAFT" | "NEW" | "PENDING" | "PAID" | "CANCELED" | "REFUSED" | "APPROVED" | "ARCHIVED" | "SCHEDULED";
}
