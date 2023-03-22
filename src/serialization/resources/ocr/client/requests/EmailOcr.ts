/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../../core";

export const EmailOcr: core.serialization.Schema<serializers.EmailOcr.Raw, Mercoa.EmailOcr> = core.serialization.object(
    {
        items: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../..")).EmailOcrRequest)
        ),
    }
);

export declare namespace EmailOcr {
    interface Raw {
        items: serializers.EmailOcrRequest.Raw[];
    }
}
