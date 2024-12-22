// Not @ts-check because we can't type eslint-plugin-jasmine
// at the momeent. We add it to "ingnores" here and removed it
// from "includes" in tsconfig.json. Also note the projectService
// true parser option means tsconfig.json controls what files
// processed (or at least get parsed by TS).

// import pluginJs from "@eslint/js";
import esLint from '@eslint/js'
import tsLint from 'typescript-eslint'
import prettierLint from 'eslint-config-prettier'
import jasmine from 'eslint-plugin-jasmine'
// import globals from 'globals'

export default tsLint.config(
  {
    ignores: ['bin/**', 'eslint.config.js'],
  },
  {
    languageOptions: {
      // globals: {
      //   ...globals.jasmine,
      // },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      jasmine,
    },
  },
  esLint.configs.recommended,
  jasmine.configs.recommended,
  tsLint.configs.strictTypeChecked,
  tsLint.configs.stylisticTypeChecked,

  // Last to turn off any formatting lints
  prettierLint,
)
