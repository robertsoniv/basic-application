import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    console.log('ENV', env);
    return {
      base: env.VITE_APP_CONFIG_BASE,
      plugins: [react()],
    };
});