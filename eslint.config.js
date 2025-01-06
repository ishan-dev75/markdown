import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      stylelint - config - prettier,
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"], // Node.js and external libraries
            ["internal"], // Aliased paths
            ["parent", "sibling", "index"], // Relative imports
            ["object", "type"], // Object and type imports
          ],
          "newlines-between": "always",
        },
      ],
      "simple-import-sort/imports": "error", // Auto-sort imports
      "simple-import-sort/exports": "error", // Auto-sort exports
    },
  },
);
