/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface ApprovalPolicyUpdateRequest {
    id: Mercoa.PolicyId;
    trigger?: Mercoa.Trigger;
    rule?: Mercoa.Rule;
    upstreamPolicyId?: Mercoa.PolicyId;
}
