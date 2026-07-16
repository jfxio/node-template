// @ts-check

import esLint from '@eslint/js'
import prettierLint from 'eslint-config-prettier/flat'
import {defineConfig} from 'eslint/config'
// import tsDoc from 'eslint-plugin-tsdoc'
import tsLint from 'typescript-eslint'

export default defineConfig({
  files: ['**/*.{js,ts}'],
  ignores: ['bin/**'],
  extends: [esLint.configs.recommended, tsLint.configs.strict, tsLint.configs.stylistic],

  ...prettierLint,

  rules: {
    // Rely on typescript to flag unused variables, but see
    // https://typescript-eslint.io/rules/no-unused-vars for implementing the _ exclusion
    '@typescript-eslint/no-unused-vars': 'off',
  },
})

// 2026-07-15 The config below is from the last iteration in case we missed something.

//   {
//     ignores: ['bin/**', 'eslint.config.js'],
//   },
//   {
//     languageOptions: {
//       parserOptions: {
//         projectService: true,
//         tsconf igRootDir: import.meta.dirname,
//       },
//     },
//     plugins: {
//       jasmine,
//       tsDoc,
//     },
//   },
//   esLint.configs.recommended,
//   jasmine.configs.recommended,
//   tsLint.configs.strictTypeChecked,
//   tsLint.configs.stylisticTypeChecked,
//   {
//     rules: {
//       // Rely on typescript to flag unused variables
//       '@typescript-eslint/no-unused-vars': 'off',
//       // Revert to recommended from strict
//       '@typescript-eslint/restrict-template-expressions': [
//         'error',
//         {
//           allow: [{name: ['Error', 'URL', 'URLSearchParams'], from: 'lib'}],
//           allowBoolean: true,
//           allowNullish: true,
//           allowNumber: true,
//           allowRegExp: true,
//         },
//       ],
//       // Allow infinte loops
//       '@typescript-eslint/no-unnecessary-condition': [
//         'error',
//         {
//           allowConstantLoopConditions: true,
//         },
//       ],
//       // Only warn about focus tests (should get removed before merge)
//       'jasmine/no-focused-tests': 'warn',
//       'tsDoc/syntax': 'warn',
//     },
//   },

//   // Last to turn off any formatting lints
//   prettierLint,
// )
