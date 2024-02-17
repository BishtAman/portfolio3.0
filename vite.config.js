import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    // Use the Tailwind CSS plugin
    tailwindcss(),
    // Use the Autoprefixer plugin
    autoprefixer(),
  ],
});
