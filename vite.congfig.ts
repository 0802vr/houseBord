import { defineConfig } from "vite";
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
  plugins: [
    nunjucks(),
  ],
  build: {
    sourcemap: true,
     
},  
  css: {
     
    devSourcemap: true
  },
});

 
