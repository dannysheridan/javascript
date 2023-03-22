/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../../core";

export const RunOcr: core.serialization.Schema<serializers.RunOcr.Raw, Mercoa.RunOcr> = core.serialization.object({
    mimeType: core.serialization.string(),
    image: core.serialization.string(),
});

export declare namespace RunOcr {
    interface Raw {
        mimeType: string;
        image: string;
    }
}
