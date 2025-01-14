module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["airbnb-base"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        quotes: ["error", "double"],
        indent: ["error", 4],
        "import/no-commonjs": "off",
        "linebreak-style": ["off"],
    },
};
