import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    console.log('ENV', env);
    return {
      base: env.VITE_APP_CONFIG_BASE,
      plugins: [react()],
      define: {
        'process.env.VITE_APP_CONFIG_BASE': env.VITE_APP_CONFIG_BASE,
        'process.env.VITE_APP_ORDERCLOUD_CLIENT_ID': env.VITE_APP_ORDERCLOUD_CLIENT_ID,
        'process.env.VITE_APP_ORDERCLOUD_SCOPE': env.VITE_APP_ORDERCLOUD_SCOPE,
        'process.env.VITE_APP_ORDERCLOUD_CUSTOM_SCOPE': env.VITE_APP_ORDERCLOUD_CUSTOM_SCOPE,
        'process.env.VITE_APP_ORDERCLOUD_ALLOW_ANONYMOUS': env.VITE_APP_ORDERCLOUD_ALLOW_ANONYMOUS,
      }
    };
});