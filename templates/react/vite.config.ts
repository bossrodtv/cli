import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import pages from 'vite-plugin-pages';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

config();

const forDockerDevelopment = () => {
  if (process.env.MACHINE !== 'docker') return {};
  return {
    watch: {
      usePolling: true,
    },
  };
};

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react(),
      pages(),
      tsconfigPaths(),
      svgr({
        svgrOptions: {
          icon: true,
        },
      }),
      viteCompression({
        verbose: false,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteCompression({
        verbose: true,
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      ViteEjsPlugin(() => {
        return {
          STAGE: process.env.STAGE,
        };
      }),
    ],
    base: '/',
    server: {
      port: Number(process.env.PORT),
      ...forDockerDevelopment(),
    },
    preview: {
      port: 8080,
    },
    build: {
      outDir: 'build',
      reportCompressedSize: false,
      sourcemap: false,
    },
    define: {
      // handle env variables here since import.meta conflicts with jest
      'process.env.MODE': `"${mode}"`,
      'process.env.STAGE': `"${process.env.STAGE}"`,
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
          }),
        ],
      },
    },
  });
};
