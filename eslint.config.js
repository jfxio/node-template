// Not @ts-check because we can't type eslint-plugin-jasmine
// at the momeent. We add it to "ingnores" here and removed it
// from "includes" in tsconfig.json. Also note the projectService
// true parser option means tsconfig.json controls what files
// processed (or at least get parsed by TS).

import esLint from '@eslint/js'
import prettierLint from 'eslint-config-prettier'
import jasmine from 'eslint-plugin-jasmine'
import tsDoc from 'eslint-plugin-tsdoc'
import tsLint from 'typescript-eslint'

export default tsLint.config(
  {
    ignores: ['bin/**', 'eslint.config.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      jasmine,
      tsDoc,
    },
  },
  esLint.configs.recommended,
  jasmine.configs.recommended,
  tsLint.configs.strictTypeChecked,
  tsLint.configs.stylisticTypeChecked,
  {
    rules: {
      // Rely on typescript to flag unused variables
      '@typescript-eslint/no-unused-vars': 'off',
      // Revert to recommended from strict
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allow: [{name: ['Error', 'URL', 'URLSearchParams'], from: 'lib'}],
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
      // Allow infinte loops
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],
      // Only warn about focus tests (should get removed before merge)
      'jasmine/no-focused-tests': 'warn',
      'tsDoc/syntax': 'warn',
    },
  },

  // Last to turn off any formatting lints
  prettierLint,
)
