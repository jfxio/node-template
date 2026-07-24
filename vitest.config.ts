import {defineConfig} from 'vitest/config'

// --no-file-parallelism
export default defineConfig({
  test: {
    testTimeout: 10_000,
    include: ['{test,spec}/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})
