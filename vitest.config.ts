import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        // Tests, generated output, type declarations, and application bootstrap.
        'src/**/*.test.{ts,tsx}',
        'src/types/**',
        'src/vite-env.d.ts',
        'src/main.tsx',
        // Declarative content, data, constants, and style tokens are validated separately.
        'src/lib/fodmap-db.ts',
        'src/config/**',
        'src/constants/**',
        'src/styles/**',
        // Loading placeholders have no user interaction or business behavior.
        'src/components/ExplorerSkeleton.tsx',
        'src/components/ui/skeleton.tsx',
      ],
      reporter: ['text', 'html', 'json-summary'],
      thresholds: {
        statements: 79,
        branches: 87,
        functions: 75,
        lines: 81,
      },
    },
  },
});
