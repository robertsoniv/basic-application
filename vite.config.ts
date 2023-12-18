import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("ENV", env);
  const definitions = {
    "process.env.VITE_APP_CONFIG_BASE": JSON.stringify(
      env.VITE_APP_CONFIG_BASE
    ),
    "process.env.VITE_APP_ORDERCLOUD_BASE_API_URL": JSON.stringify(
      env.VITE_APP_ORDERCLOUD_BASE_API_URL
    ),
    "process.env.VITE_APP_ORDERCLOUD_CLIENT_ID": JSON.stringify(
      env.VITE_APP_ORDERCLOUD_CLIENT_ID
    ),
    "process.env.VITE_APP_ORDERCLOUD_SCOPE": JSON.stringify(
      env.VITE_APP_ORDERCLOUD_SCOPE
    ),
    "process.env.VITE_APP_ORDERCLOUD_CUSTOM_SCOPE": JSON.stringify(
      env.VITE_APP_ORDERCLOUD_CUSTOM_SCOPE
    ),
    "process.env.VITE_APP_ORDERCLOUD_ALLOW_ANONYMOUS": JSON.stringify(
      env.VITE_APP_ORDERCLOUD_ALLOW_ANONYMOUS
    ),
  };
  return {
    base: env.VITE_APP_CONFIG_BASE,
    plugins: [react()],
    define: definitions,
  };
});
