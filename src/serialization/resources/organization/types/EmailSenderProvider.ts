/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const EmailSenderProvider: core.serialization.Schema<
    serializers.EmailSenderProvider.Raw,
    Mercoa.EmailSenderProvider
> = core.serialization.enum_(["none", "sendgrid", "resend"]);

export declare namespace EmailSenderProvider {
    type Raw = "none" | "sendgrid" | "resend";
}
