/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BusinessOnboardingOptions: core.serialization.ObjectSchema<
    serializers.BusinessOnboardingOptions.Raw,
    Mercoa.BusinessOnboardingOptions
> = core.serialization.object({
    email: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    name: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    type: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    doingBusinessAs: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    ein: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    address: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    phone: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    formationDate: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    website: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
    description: core.serialization.lazyObject(async () => (await import("../../..")).OnboardingOption),
});

export declare namespace BusinessOnboardingOptions {
    interface Raw {
        email: serializers.OnboardingOption.Raw;
        name: serializers.OnboardingOption.Raw;
        type: serializers.OnboardingOption.Raw;
        doingBusinessAs: serializers.OnboardingOption.Raw;
        ein: serializers.OnboardingOption.Raw;
        address: serializers.OnboardingOption.Raw;
        phone: serializers.OnboardingOption.Raw;
        formationDate: serializers.OnboardingOption.Raw;
        website: serializers.OnboardingOption.Raw;
        description: serializers.OnboardingOption.Raw;
    }
}
