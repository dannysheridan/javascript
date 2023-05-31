/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const ApproverRule: core.serialization.ObjectSchema<serializers.ApproverRule.Raw, Mercoa.ApproverRule> =
    core.serialization.object({
        numApprovers: core.serialization.number(),
        identifierList: core.serialization.lazy(async () => (await import("../../..")).IdentifierList),
    });

export declare namespace ApproverRule {
    interface Raw {
        numApprovers: number;
        identifierList: serializers.IdentifierList.Raw;
    }
}
