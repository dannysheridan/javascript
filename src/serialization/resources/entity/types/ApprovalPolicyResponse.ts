/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const ApprovalPolicyResponse: core.serialization.ObjectSchema<
    serializers.ApprovalPolicyResponse.Raw,
    Mercoa.ApprovalPolicyResponse
> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../..")).PolicyId),
    trigger: core.serialization.lazy(async () => (await import("../../..")).Trigger),
    rule: core.serialization.lazy(async () => (await import("../../..")).Rule),
    upstreamPolicyId: core.serialization.lazy(async () => (await import("../../..")).PolicyId),
});

export declare namespace ApprovalPolicyResponse {
    interface Raw {
        id: serializers.PolicyId.Raw;
        trigger: serializers.Trigger.Raw;
        rule: serializers.Rule.Raw;
        upstreamPolicyId: serializers.PolicyId.Raw;
    }
}
