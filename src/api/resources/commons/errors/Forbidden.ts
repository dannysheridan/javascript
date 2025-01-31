/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class Forbidden extends errors.MercoaError {
    constructor(body: string) {
        super({
            statusCode: 403,
            body: body,
        });
        Object.setPrototypeOf(this, Forbidden.prototype);
    }
}
