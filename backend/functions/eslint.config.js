const globals = require('globals');

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.dev.json"],
        tsconfigRootDir: ".",
      },
      globals: {
        ...globals.node
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'import': require('eslint-plugin-import')
    },
    rules: {
      "quotes": ["error", "double"],
      "import/no-unresolved": "off",
      "indent": ["error", 2],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "warn"
    }
  }
];
