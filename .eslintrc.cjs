module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:array-func/recommended',
        'plugin:unicorn/recommended',
        'plugin:sonarjs/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:yml/standard',
        'prettier',
    ],
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            parser: 'yaml-eslint-parser',
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['no-secrets'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-secrets/no-secrets': 'error',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
        react: {
            version: 'detect',
        },
    },
};
