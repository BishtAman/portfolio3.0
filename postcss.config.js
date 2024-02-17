import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    // Use the Tailwind CSS plugin
    tailwindcss,
    // Use the Autoprefixer plugin
    autoprefixer,
  ],
});
