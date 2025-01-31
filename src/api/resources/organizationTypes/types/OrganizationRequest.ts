/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface OrganizationRequest {
    name?: string;
    logo?: string;
    websiteUrl?: string;
    supportEmail?: string;
    paymentMethods?: Mercoa.PaymentMethodsRequest;
    emailProvider?: Mercoa.EmailProviderRequest;
    colorScheme?: Mercoa.ColorSchemeRequest;
    payeeOnboardingOptions?: Mercoa.OnboardingOptionsRequest;
    payorOnboardingOptions?: Mercoa.OnboardingOptionsRequest;
    metadataSchema?: Mercoa.MetadataSchema[];
}
