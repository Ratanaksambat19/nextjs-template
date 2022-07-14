module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'jsx-a11y/alt-text': [
      2,
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: ['Image'],
        object: ['Object'],
        area: ['Area'],
        'input[type="image"]': ['InputImage'],
      },
    ],
  },
  settings: {
    react: {
      version: 'latest',
    },
    'import/resolver': {
      node: {
        paths: ['src', 'components'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@common', './src/components/Common'],
          ['@layout', './src/components/Layout'],
          ['@constants', './src/constants'],
        ],
      },
    },
  },
};
