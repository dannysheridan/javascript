/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const BirthDate: core.serialization.ObjectSchema<serializers.BirthDate.Raw, Mercoa.BirthDate> =
    core.serialization.object({
        day: core.serialization.string().optional(),
        month: core.serialization.string().optional(),
        year: core.serialization.string().optional(),
    });

export declare namespace BirthDate {
    interface Raw {
        day?: string | null;
        month?: string | null;
        year?: string | null;
    }
}
