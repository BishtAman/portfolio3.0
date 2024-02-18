import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindCss from 'tailwindcss';

export default defineConfig({
  plugins: [
    react(),
    // Use the Tailwind CSS plugin
    tailwindCss(),
  ],
});
