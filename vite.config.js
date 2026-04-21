import { defineConfig } from 'vite';

// `serve`: `/`. `build`: `./` so assets work on GitHub Pages project URLs (/repo/).
export default defineConfig(({ command }) => ({
  root: '.',
  publicDir: 'public',
  base: command === 'serve' ? '/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}));
