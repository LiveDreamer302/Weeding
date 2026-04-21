import { defineConfig } from 'vite';

/** Set in CI for GitHub project pages (e.g. /Weeding/). Local dev uses '/'. */
const base = process.env.GITHUB_PAGES_BASE || '/';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
