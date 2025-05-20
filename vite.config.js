import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    // Output location
    outDir: 'dist',
    // Library mode configuration
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'widgets',
      fileName: 'widgets'
    },
    // Preserving the CSS modules naming pattern
    cssCodeSplit: true,
    rollupOptions: {
      // External dependencies that shouldn't be bundled
      external: ['d3'],
      output: {
        // Globals for external dependencies
        globals: {
          d3: 'd3'
        }
      }
    }
  },
  css: {
    modules: {
      // Match the webpack CSS modules naming pattern
      generateScopedName: '[hash:base64:5]__[local]'
    }
  }
});
