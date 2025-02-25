/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface CloudMailinRequest {
    headers?: unknown;
    envelope: Mercoa.CloudMailinEnvelope;
    plain: string;
    html?: string;
    replyPlain?: string;
    attachments: Mercoa.CloudMailinAttachment[];
}
