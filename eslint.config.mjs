import eslintPluginReact from 'eslint-plugin-react';
import babelEslintParser from '@babel/eslint-parser';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['dist/**'],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^React$',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
      'n/no-extraneous-import': 'off',
      'n/no-unpublished-require': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'n/no-unpublished-import': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: babelEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          plugins: ['@babel/plugin-syntax-jsx'],
        },
      },
    },
  },
];
