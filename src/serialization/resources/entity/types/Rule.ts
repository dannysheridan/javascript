/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const Rule: core.serialization.Schema<serializers.Rule.Raw, Mercoa.Rule> = core.serialization
    .union("type", {
        approver: core.serialization.lazyObject(async () => (await import("../../..")).ApproverRule),
    })
    .transform<Mercoa.Rule>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Rule {
    type Raw = Rule.Approver;

    interface Approver extends serializers.ApproverRule.Raw {
        type: "approver";
    }
}
