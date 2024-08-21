import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})