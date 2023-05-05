import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: false,
  clean: process.env.BUILD_ENV === 'production',
  dts: true,
  format: ['cjs', 'esm'],
  loader: { '.png': 'copy' },
  minify: process.env.BUILD_ENV === 'production',
  external: ['@polkadot/api'],
})
