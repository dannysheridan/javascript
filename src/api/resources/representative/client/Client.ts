/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Mercoa } from "@mercoa/javascript";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Representative {
    interface Options {
        environment?: environments.MercoaEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Representative {
    constructor(private readonly options: Representative.Options) {}

    /**
     * Get representatives for an entity
     */
    public async getAll(entityId: Mercoa.EntityId): Promise<Mercoa.RepresentativeResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/representatives`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.representative.getAll.Response.parseOrThrow(_response.body, {
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
     * Create representative
     */
    public async create(
        entityId: Mercoa.EntityId,
        request: Mercoa.RepresentativeRequest
    ): Promise<Mercoa.RepresentativeResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/representative`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.RepresentativeRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.RepresentativeResponse.parseOrThrow(_response.body, {
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
     * Get representative
     */
    public async get(
        entityId: Mercoa.EntityId,
        representativeId: Mercoa.RepresentativeId
    ): Promise<Mercoa.RepresentativeResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(
                    entityId
                )}/representative/${await serializers.RepresentativeId.jsonOrThrow(representativeId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.RepresentativeResponse.parseOrThrow(_response.body, {
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
     * Delete representative
     */
    public async delete(entityId: Mercoa.EntityId, representativeId: Mercoa.RepresentativeId): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(
                    entityId
                )}/representative/${await serializers.RepresentativeId.jsonOrThrow(representativeId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
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
