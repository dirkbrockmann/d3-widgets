import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [	  	
	  //	virtualMetaPlugin(),
	   tailwindcss(),
		cssInjectedByJsPlugin(),
  ],
  build: {
	lib: {
	    entry: './src/main.js',
	    name: 'd3-widgets',
	    fileName: (format) => `index.${format}.js`, //fileName: () => 'index.js',
	    formats: ['es','umd'] // added "es" format
	},
    rollupOptions: {
      output: {
		exports: 'named', // ← this is the key
        globals: {}
      }
    }
  }
})