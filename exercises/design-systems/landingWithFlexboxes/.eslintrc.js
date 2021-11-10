// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    plugins: ["@html-eslint"],
    overrides: [
        {
            files: ["*.html"],
            parser: "@html-eslint/parser",
            extends: ["plugin:@html-eslint/recommended"],
        },
    ],
    rules: {},
};
