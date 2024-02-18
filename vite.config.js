import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindCss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    // Use the Tailwind CSS plugin
    tailwindCss(),
    // Use the Autoprefixer plugin
    autoprefixer(),
  ],
});
