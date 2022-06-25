module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
    "plugin:prettier/recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vuejs-accessibility/form-control-has-label": [
      "off",
      {
        labelComponents: ["CustomLabel"],
      },
    ],
    "vuejs-accessibility/label-has-for": [
      "off",
      {
        components: ["VLabel"],
        controlComponents: ["VInput"],
        allowChildren: true,
      },
    ],
  },
};
