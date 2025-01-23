import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      "class-methods-use-this": "off"
    }
  },
  pluginJs.configs.recommended,
];
