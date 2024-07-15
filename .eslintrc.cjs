module.exports = {
  files: ['*.ts', '*.tsx'],
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
  },
  settings: {
    "project": "packages/*/tsconfig.json",
    'import/parsers': {
      '@typescript-eslint/parser': [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        "project": "./tsconfig.json",
      }
    }
  }
}
