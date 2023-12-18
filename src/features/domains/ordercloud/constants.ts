import { ApiRole } from "ordercloud-javascript-sdk";

//Basic auth configuration
const BASE_API_URL = import.meta.env.VITE_APP_ORDERCLOUD_BASE_API_URL;
const CLIENT_ID = import.meta.env.VITE_APP_ORDERCLOUD_CLIENT_ID;
const SCOPE_STRING = import.meta.env.VITE_APP_ORDERCLOUD_SCOPE;
const CUSTOM_SCOPE_STRING = import.meta.env.VITE_APP_ORDERCLOUD_SCOPE;

const SCOPE:ApiRole[] = SCOPE_STRING?.split(',');
const CUSTOM_SCOPE:string[] = CUSTOM_SCOPE_STRING?.split(',');

//Anonymous auth configuration
const ALLOW_ANONYMOUS = import.meta.env.VITE_APP_ORDERCLOUD_ALLOW_ANONYMOUS === "true";

const result = {
    BASE_API_URL,
    CLIENT_ID,
    SCOPE,
    CUSTOM_SCOPE,
    ALLOW_ANONYMOUS,
};

console.log('consts', result);

export default result;