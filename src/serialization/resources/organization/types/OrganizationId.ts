/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const OrganizationId: core.serialization.Schema<serializers.OrganizationId.Raw, Mercoa.OrganizationId> =
    core.serialization.string();

export declare namespace OrganizationId {
    type Raw = string;
}
