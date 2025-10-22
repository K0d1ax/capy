module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: ["**/dist/**", "**/.next/**", "**/build/**"],
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module"
  }
};
