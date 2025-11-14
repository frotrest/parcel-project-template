import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],

    files: ["src/**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly"
      }
    },

    plugins: {
      prettier: eslintPluginPrettier
    },

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": "warn",
      "prettier/prettier": "warn"
    }
  }
];
