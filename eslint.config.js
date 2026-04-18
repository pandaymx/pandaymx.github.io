const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-plugin-prettier');
const reactHooks = require('eslint-plugin-react-hooks');
const globals = require('globals');

module.exports = [
  {
    ignores: [
      'build/**',
      '.docusaurus/**',
      '.cache/**',
      'node_modules/**',
      'bun.lock',
      'package.json',
      '*.config.js',
      '*.conf',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: '19.0',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'prettier/prettier': 'error',
    },
  },
];
