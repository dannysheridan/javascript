/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CloudMailinAttachment: core.serialization.ObjectSchema<
    serializers.CloudMailinAttachment.Raw,
    Mercoa.CloudMailinAttachment
> = core.serialization.object({
    content: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    fileName: core.serialization.property("file_name", core.serialization.string()),
    contentType: core.serialization.property("content_type", core.serialization.string()),
    size: core.serialization.unknown(),
    disposition: core.serialization.unknown(),
    contentId: core.serialization.property("content_id", core.serialization.unknown()),
});

export declare namespace CloudMailinAttachment {
    interface Raw {
        content?: string | null;
        url?: string | null;
        file_name: string;
        content_type: string;
        size?: unknown;
        disposition?: unknown;
        content_id?: unknown;
    }
}
