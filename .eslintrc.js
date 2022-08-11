module.exports = {
  root: true,
  "env": {
    "browser": true,
    "es2021": true,
    "react-native/react-native": true
  },
  ignorePatterns: ["node_modules/", ".eslintrc.*", "package.json"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
   parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react", "react-hooks", "react-native", "@typescript-eslint"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

