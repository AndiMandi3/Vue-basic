import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      "no-undef": "error",
      "no-dupe-else-if": "error",
      "no-lonely-if": "error",
      "for-direction": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-else-return": "error",
      "require-await": "error",
      "eqeqeq": "error",
      "no-var": "error",
      "yoda": "error",
      "semi": "error",
    },
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "coverage/",
      "*.min.js",
      "**/.*",
    ],
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    },
  },
]);
