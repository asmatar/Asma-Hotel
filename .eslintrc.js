/* {
  "extends": "next/core-web-vitals"
} */

/* {
  "extends": ["next", "next/core-web-vitals"],
  "rules": {
    // Override or add rules here
    "next/link-passhref": "error",
    "next/no-img-element": "off" // if you prefer to use <img> tags directly
  }
} */
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
