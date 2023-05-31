/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const CommentResponse: core.serialization.ObjectSchema<serializers.CommentResponse.Raw, Mercoa.CommentResponse> =
    core.serialization.object({
        id: core.serialization.string(),
        text: core.serialization.string(),
        user: core.serialization.lazyObject(async () => (await import("../../..")).EntityUserResponse).optional(),
        approval: core.serialization.lazyObject(async () => (await import("../../..")).Approver).optional(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace CommentResponse {
    interface Raw {
        id: string;
        text: string;
        user?: serializers.EntityUserResponse.Raw | null;
        approval?: serializers.Approver.Raw | null;
        createdAt: string;
        updatedAt: string;
    }
}
