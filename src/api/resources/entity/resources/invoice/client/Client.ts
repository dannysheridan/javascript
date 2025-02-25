/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Mercoa from "../../../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";

export declare namespace Invoice {
    interface Options {
        environment?: core.Supplier<environments.MercoaEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Invoice {
    constructor(protected readonly _options: Invoice.Options) {}

    /**
     * Get invoices for an entity with the given filters.
     * @throws {@link Mercoa.InvoiceQueryError}
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     */
    public async find(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.EntityGetInvoicesRequest = {},
        requestOptions?: Invoice.RequestOptions
    ): Promise<Mercoa.FindInvoiceResponse> {
        const {
            excludePayables,
            excludeReceivables,
            startDate,
            endDate,
            orderBy,
            orderDirection,
            limit,
            startingAfter,
            search,
            payerId,
            vendorId,
            approverId,
            invoiceId,
            status,
            includeFees,
        } = request;
        const _queryParams = new URLSearchParams();
        if (excludePayables != null) {
            _queryParams.append("excludePayables", excludePayables.toString());
        }

        if (excludeReceivables != null) {
            _queryParams.append("excludeReceivables", excludeReceivables.toString());
        }

        if (startDate != null) {
            _queryParams.append("startDate", startDate.toISOString());
        }

        if (endDate != null) {
            _queryParams.append("endDate", endDate.toISOString());
        }

        if (orderBy != null) {
            _queryParams.append("orderBy", orderBy);
        }

        if (orderDirection != null) {
            _queryParams.append("orderDirection", orderDirection);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (startingAfter != null) {
            _queryParams.append("startingAfter", startingAfter);
        }

        if (search != null) {
            _queryParams.append("search", search);
        }

        if (payerId != null) {
            if (Array.isArray(payerId)) {
                for (const _item of payerId) {
                    _queryParams.append("payerId", _item);
                }
            } else {
                _queryParams.append("payerId", payerId);
            }
        }

        if (vendorId != null) {
            if (Array.isArray(vendorId)) {
                for (const _item of vendorId) {
                    _queryParams.append("vendorId", _item);
                }
            } else {
                _queryParams.append("vendorId", vendorId);
            }
        }

        if (approverId != null) {
            if (Array.isArray(approverId)) {
                for (const _item of approverId) {
                    _queryParams.append("approverId", _item);
                }
            } else {
                _queryParams.append("approverId", approverId);
            }
        }

        if (invoiceId != null) {
            if (Array.isArray(invoiceId)) {
                for (const _item of invoiceId) {
                    _queryParams.append("invoiceId", _item);
                }
            } else {
                _queryParams.append("invoiceId", invoiceId);
            }
        }

        if (status != null) {
            if (Array.isArray(status)) {
                for (const _item of status) {
                    _queryParams.append("status", _item);
                }
            } else {
                _queryParams.append("status", status);
            }
        }

        if (includeFees != null) {
            _queryParams.append("includeFees", includeFees.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/invoices`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.FindInvoiceResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "InvoiceQueryError":
                    throw new Mercoa.InvoiceQueryError(
                        await serializers.InvoiceQueryError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "AuthHeaderMissingError":
                    throw new Mercoa.AuthHeaderMissingError();
                case "AuthHeaderMalformedError":
                    throw new Mercoa.AuthHeaderMalformedError(
                        await serializers.AuthHeaderMalformedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        await serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        await serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        await serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        await serializers.Unimplemented.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.MercoaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     */
    public async get(
        entityId: Mercoa.EntityId,
        invoiceId: Mercoa.InvoiceId,
        request: Mercoa.entity.GetInvoice = {},
        requestOptions?: Invoice.RequestOptions
    ): Promise<Mercoa.InvoiceResponse> {
        const { includeFees } = request;
        const _queryParams = new URLSearchParams();
        if (includeFees != null) {
            _queryParams.append("includeFees", includeFees.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(
                    entityId
                )}/invoice/${await serializers.InvoiceId.jsonOrThrow(invoiceId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.InvoiceResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "AuthHeaderMissingError":
                    throw new Mercoa.AuthHeaderMissingError();
                case "AuthHeaderMalformedError":
                    throw new Mercoa.AuthHeaderMalformedError(
                        await serializers.AuthHeaderMalformedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        await serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        await serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        await serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        await serializers.Unimplemented.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.MercoaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Get invoice metrics for an entity with the given filters.
     * @throws {@link Mercoa.InvoiceQueryError}
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     */
    public async metrics(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.InvoiceMetricsRequest = {},
        requestOptions?: Invoice.RequestOptions
    ): Promise<Mercoa.InvoiceMetricsResponse[]> {
        const {
            search,
            excludePayables,
            excludeReceivables,
            payerId,
            vendorId,
            approverId,
            invoiceId,
            status,
            dueDateStart,
            dueDateEnd,
            createdDateStart,
            createdDateEnd,
            currency,
        } = request;
        const _queryParams = new URLSearchParams();
        if (search != null) {
            _queryParams.append("search", search);
        }

        if (excludePayables != null) {
            _queryParams.append("excludePayables", excludePayables.toString());
        }

        if (excludeReceivables != null) {
            _queryParams.append("excludeReceivables", excludeReceivables.toString());
        }

        if (payerId != null) {
            if (Array.isArray(payerId)) {
                for (const _item of payerId) {
                    _queryParams.append("payerId", _item);
                }
            } else {
                _queryParams.append("payerId", payerId);
            }
        }

        if (vendorId != null) {
            if (Array.isArray(vendorId)) {
                for (const _item of vendorId) {
                    _queryParams.append("vendorId", _item);
                }
            } else {
                _queryParams.append("vendorId", vendorId);
            }
        }

        if (approverId != null) {
            if (Array.isArray(approverId)) {
                for (const _item of approverId) {
                    _queryParams.append("approverId", _item);
                }
            } else {
                _queryParams.append("approverId", approverId);
            }
        }

        if (invoiceId != null) {
            if (Array.isArray(invoiceId)) {
                for (const _item of invoiceId) {
                    _queryParams.append("invoiceId", _item);
                }
            } else {
                _queryParams.append("invoiceId", invoiceId);
            }
        }

        if (status != null) {
            if (Array.isArray(status)) {
                for (const _item of status) {
                    _queryParams.append("status", _item);
                }
            } else {
                _queryParams.append("status", status);
            }
        }

        if (dueDateStart != null) {
            _queryParams.append("dueDateStart", dueDateStart.toISOString());
        }

        if (dueDateEnd != null) {
            _queryParams.append("dueDateEnd", dueDateEnd.toISOString());
        }

        if (createdDateStart != null) {
            _queryParams.append("createdDateStart", createdDateStart.toISOString());
        }

        if (createdDateEnd != null) {
            _queryParams.append("createdDateEnd", createdDateEnd.toISOString());
        }

        if (currency != null) {
            if (Array.isArray(currency)) {
                for (const _item of currency) {
                    _queryParams.append("currency", _item);
                }
            } else {
                _queryParams.append("currency", currency);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/invoice-metrics`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.entity.invoice.metrics.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "InvoiceQueryError":
                    throw new Mercoa.InvoiceQueryError(
                        await serializers.InvoiceQueryError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "AuthHeaderMissingError":
                    throw new Mercoa.AuthHeaderMissingError();
                case "AuthHeaderMalformedError":
                    throw new Mercoa.AuthHeaderMalformedError(
                        await serializers.AuthHeaderMalformedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        await serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        await serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        await serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        await serializers.Unimplemented.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.MercoaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
