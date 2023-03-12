module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ['dist/*'],
  rules: {
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      }
    ]
  },
};
