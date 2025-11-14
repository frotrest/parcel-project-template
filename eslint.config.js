import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],

    files: ["src/**/*.{js,jsx,ts,tsx}", ".github/**/*.yml"],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },

    plugins: {
      prettier: eslintPluginPrettier,
    },

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "prettier/prettier": "warn",
    },
  },
];
