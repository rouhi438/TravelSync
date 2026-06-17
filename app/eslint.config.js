import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { files: ["**/*.{js,jsx,mjs,cjs}"] },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ["dist", "vite.config.js"],
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      "react/jsx-uses-react": 0,
      "react/react-in-jsx-scope": 0,
      "react/prop-types": 0,
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
