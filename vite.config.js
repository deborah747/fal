import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  // Only variables prefixed with VITE_ will be exposed to your Vite-processed code
  const env = loadEnv(mode, process.cwd(), '');
  
  // Only expose specific environment variables that are needed in the client
  const envWithProcessPrefix = {
    'process.env': {
      VITE_API_KEY: JSON.stringify(env.VITE_API_KEY),
      VITE_AUTH_DOMAIN: JSON.stringify(env.VITE_AUTH_DOMAIN),
      VITE_PROJECT_ID: JSON.stringify(env.VITE_PROJECT_ID),
      VITE_STORAGE_BUCKET: JSON.stringify(env.VITE_STORAGE_BUCKET),
      VITE_MESSAGING_SENDER_ID: JSON.stringify(env.VITE_MESSAGING_SENDER_ID),
      VITE_APP_ID: JSON.stringify(env.VITE_APP_ID),
      VITE_MEASUREMENT_ID: JSON.stringify(env.VITE_MEASUREMENT_ID)
    }
  };
  
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    define: envWithProcessPrefix,
    server: {
      port: 3000,
      open: true
    }
    ,
    build: {
      outDir: 'dist'
    }
  };
});