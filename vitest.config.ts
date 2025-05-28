import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tsconfigPaths from 'vite-tsconfig-paths'; // For resolving path aliases like $lib

export default defineConfig({
  plugins: [
    tsconfigPaths(), // Ensure this is included if you use path aliases like '$lib/'
    svelte({ hot: !process.env.VITEST })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.js', // Path to your setup file
    include: ['src/**/*.{test,spec}.{js,ts}'], // Include files in src
    // Optionally, configure coverage
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage'
    }
  },
});
