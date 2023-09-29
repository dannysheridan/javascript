/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface EntityUserRequest {
    /** The ID used to identify this user in your system. */
    foreignId?: string;
    email?: string;
    name?: string;
    /** List of roles. A role can be any string. For example: "payer", "approver", "viewer" */
    roles?: string[];
}
