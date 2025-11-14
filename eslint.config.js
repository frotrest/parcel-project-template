import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["**", "!src/**/*.{js,jsx,ts,tsx}"],

    files: ["src/**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly"
      }
    },

    plugins: {
      prettier: eslintPluginPrettier
    },

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "prettier/prettier": "warn"
    }
  }
];
