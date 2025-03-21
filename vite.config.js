import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/autonoteweb', // Use a different base if deploying to a subfolder
});
