// @ts-check

import {fileURLToPath, URL} from 'node:url'
import esLint from '@eslint/js'
import prettierLint from 'eslint-config-prettier/flat'
import {defineConfig, includeIgnoreFile} from 'eslint/config'
// import tsDoc from 'eslint-plugin-tsdoc'
import tsLint from 'typescript-eslint'

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url))

export default defineConfig([
  // To troubleshoot files and ignore issues:
  //    pnpm eslint --debug 2>&1 | grep linted | less
  includeIgnoreFile(gitignorePath, {gitignoreResolution: true}),
  {
    extends: [esLint.configs.recommended, tsLint.configs.strict, tsLint.configs.stylistic],

    ...prettierLint,

    rules: {
      // Rely on typescript to flag unused variables, but see
      // https://typescript-eslint.io/rules/no-unused-vars for implementing the _ exclusion
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
])
