/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface FindEntityResponse {
    /** Total number of entities for the given filters. This value is not limited by the limit parameter. It is provided so that you can determine how many pages of results are available. */
    count: number;
    /** True if there are more entities available for the given filters. */
    hasMore: boolean;
    data: Mercoa.EntityResponse[];
}
