const eslintPluginReact = require('eslint-plugin-react')
const babelParser = require('@babel/eslint-parser')

module.exports = [
  {
    files: ['./src/**/*.{js,jsx}', 'App.js'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/prop-types': 'off',
      'semi': 'error',
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off',
      'no-unused-vars': 'off',
    },
  },
]