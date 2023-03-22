/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.counterparty.find.Response.Raw,
    Mercoa.CounterpartyResponse[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).CounterpartyResponse));

export declare namespace Response {
    type Raw = serializers.CounterpartyResponse.Raw[];
}
