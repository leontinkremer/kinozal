module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4], // Отступ количество пробелов
        semi: [2, "always"], // Точка с запятой в конце строки

        // Ошибка при наличии пробела при обозночении функции, уберём её
        "space-before-function-paren": ["error", "never"],

        // Использование двойных кавычек
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};
