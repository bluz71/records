import globals from "globals"
import pluginJs from "@eslint/js"

export default [
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      indent: ["error", 2],
      "max-len": ["error", { code: 100 }],
      quotes: ["error", "double"],
      semi: ["error", "never"],
    },
  },
  pluginJs.configs.recommended,
]
