/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    env: {
        es2022: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        // tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    root: true,
}
