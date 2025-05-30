import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs}"], 
    rules: 
    {
      curly: "error",
      eqeqeq:["error", "always"],
      "no-var":"error",
      "default-case-last": "error",
      "dot-notation": "error",
      "func-names": ["error", "always"],
      "capitalized-comments": ["error", "always"],
      "prefer-object-spread": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-destructuring": ["error", {"object": true, "array": false}],
      "prefer-const": "error",
      "operator-assignment": ["error", "always"],
      "one-var": ["error", "never"],
      "object-shorthand": ["error", "always", {"avoidQuotes": true}],
      "no-useless-return": "error",
      "no-useless-rename": "error",
      "no-useless-constructor": "error",
      "no-useless-concat": "error",
      "no-useless-computed-key": "error",
      "no-useless-call": "error",
      "no-unused-expressions": "error",
      "no-unneeded-ternary": "error",
      "no-undef-init": "error",
      "no-throw-literal": "error",
      "no-ternary": "error",
      "no-shadow": "error",
      "no-sequences": "error",
      "no-return-assign": "error",
      "no-proto": "error",
      "no-plusplus": "error",
      "no-param-reassign": "error",
      "no-new-func": "error",
      "no-new": "error",
      "no-nested-ternary": "error",
      "no-multi-str": "error",
      "no-multi-assign": "error",
      "no-magic-numbers": "error",
      "no-loop-func": "error",
      "no-lonely-if": "error",
      "no-lone-blocks": "error",
      "no-labels": "error",
      "no-label-var": "error",
      "no-iterator": "error", 
      "no-invalid-this": "error",
      "no-inline-comments": "error",
      "no-extra-label": "error",
      "no-extra-bind": "error",
      "no-extend-native": "error",
      "no-eval": "error",
      "no-eq-null": "error",
      "no-empty-function": "error",
      "no-else-return": "error",
      "no-bitwise": "error",
      "no-array-constructor": "error",
      "new-cap": "error",
    } },
]);