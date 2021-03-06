module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx'
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'no-use-before-define': 'off'
      }
    },
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx'
      ],
      env: {
        jest: true
      }
    }
  ],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'eol-last': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/semi': 'error',
    'no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_'
    }],
    camelcase: 'off',
    'react/display-name': 'off'
  }
};
