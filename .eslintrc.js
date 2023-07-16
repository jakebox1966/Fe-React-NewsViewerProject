module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['react-app', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'warn',
        // console.log 사용 시 경고
        'no-unused-vars': 'error',
        // 할당되지 않은 변수 있을 시 경고
    },
}
