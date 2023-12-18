import { ApiRole } from "ordercloud-javascript-sdk";

//Basic auth configuration
const CONFIG_BASE = import.meta.env.VITE_APP_CONFIG_BASE;
const BASE_API_URL = import.meta.env.VITE_APP_ORDERCLOUD_BASE_API_URL || "https://api.ordercloud.io/v1";
const CLIENT_ID = import.meta.env.VITE_APP_ORDERCLOUD_CLIENT_ID || "";
const SCOPE_STRING = import.meta.env.VITE_APP_ORDERCLOUD_SCOPE || "";
const CUSTOM_SCOPE_STRING = import.meta.env.VITE_APP_ORDERCLOUD_CUSTOM_SCOPE;

const SCOPE:ApiRole[] = SCOPE_STRING.split(',') as ApiRole[];
const CUSTOM_SCOPE:string[] = CUSTOM_SCOPE_STRING?.split(',') || [];

//Anonymous auth configuration
const ALLOW_ANONYMOUS = JSON.parse(import.meta.env.VITE_APP_ORDERCLOUD_ALLOW_ANONYMOUS || "false");

console.log('consts', {
    CONFIG_BASE,
    BASE_API_URL,
    CLIENT_ID,
    SCOPE,
    CUSTOM_SCOPE,
    ALLOW_ANONYMOUS,
}, )

export {
    BASE_API_URL,
    CLIENT_ID,
    SCOPE,
    CUSTOM_SCOPE,
    ALLOW_ANONYMOUS,
}