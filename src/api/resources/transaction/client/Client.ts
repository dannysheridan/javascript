/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Mercoa } from "@mercoa/javascript";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Transaction {
    interface Options {
        environment?: environments.MercoaEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Transaction {
    constructor(private readonly options: Transaction.Options) {}

    /**
     * Get Transaction
     */
    public async get(transactionId: Mercoa.TransactionId): Promise<Mercoa.TransactionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/transaction/${await serializers.TransactionId.jsonOrThrow(transactionId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.TransactionResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaTimeoutError();
            case "unknown":
                throw new errors.MercoaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get all entities
     */
    public async getAll(): Promise<Mercoa.TransactionResponseExpanded[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.MercoaEnvironment.Production, "/transactions"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.transaction.getAll.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaTimeoutError();
            case "unknown":
                throw new errors.MercoaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
