/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as BankLookupClient } from "./api/resources/bankLookup/client/Client";
import { Client as CounterpartyClient } from "./api/resources/counterparty/client/Client";
import { Client as EntityClient } from "./api/resources/entity/client/Client";
import { Client as InvoiceClient } from "./api/resources/invoice/client/Client";
import { Client as OcrClient } from "./api/resources/ocr/client/Client";
import { Client as OrganizationClient } from "./api/resources/organization/client/Client";
import { Client as PaymentMethodSchemaClient } from "./api/resources/paymentMethodSchema/client/Client";
import { Client as PaymentMethodClient } from "./api/resources/paymentMethod/client/Client";
import { Client as RepresentativeClient } from "./api/resources/representative/client/Client";

export declare namespace MercoaClient {
    interface Options {
        environment?: environments.MercoaEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class MercoaClient {
    constructor(private readonly options: MercoaClient.Options) {}

    private _bankLookup: BankLookupClient | undefined;

    public get bankLookup(): BankLookupClient {
        return (this._bankLookup ??= new BankLookupClient(this.options));
    }

    private _counterparty: CounterpartyClient | undefined;

    public get counterparty(): CounterpartyClient {
        return (this._counterparty ??= new CounterpartyClient(this.options));
    }

    private _entity: EntityClient | undefined;

    public get entity(): EntityClient {
        return (this._entity ??= new EntityClient(this.options));
    }

    private _invoice: InvoiceClient | undefined;

    public get invoice(): InvoiceClient {
        return (this._invoice ??= new InvoiceClient(this.options));
    }

    private _ocr: OcrClient | undefined;

    public get ocr(): OcrClient {
        return (this._ocr ??= new OcrClient(this.options));
    }

    private _organization: OrganizationClient | undefined;

    public get organization(): OrganizationClient {
        return (this._organization ??= new OrganizationClient(this.options));
    }

    private _paymentMethodSchema: PaymentMethodSchemaClient | undefined;

    public get paymentMethodSchema(): PaymentMethodSchemaClient {
        return (this._paymentMethodSchema ??= new PaymentMethodSchemaClient(this.options));
    }

    private _paymentMethod: PaymentMethodClient | undefined;

    public get paymentMethod(): PaymentMethodClient {
        return (this._paymentMethod ??= new PaymentMethodClient(this.options));
    }

    private _representative: RepresentativeClient | undefined;

    public get representative(): RepresentativeClient {
        return (this._representative ??= new RepresentativeClient(this.options));
    }
}
