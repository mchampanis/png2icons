// @ts-check
const tseslint = require("typescript-eslint");
const jsdoc = require("eslint-plugin-jsdoc");

module.exports = tseslint.config(
    {
        files: ["png2icons.ts", "png2icons-cli.ts"],
        extends: [
            ...tseslint.configs.recommended,
            jsdoc.configs["flat/recommended-typescript"],
        ],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            "max-classes-per-file": ["error", { max: 1 }],
            "max-len": ["error", {
                code: 120,
                ignorePattern: "^import |^export \\{(.*?)\\}|//|\\sconsole\\.",
            }],
            "no-console": "off",
            "jsdoc/require-jsdoc": ["error", {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false,
                },
            }],
            "jsdoc/check-alignment": "error",
            "jsdoc/multiline-blocks": ["error", { noZeroLineText: true }],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variableLike",
                    format: ["camelCase", "UPPER_CASE"],
                    leadingUnderscore: "allow",
                },
                {
                    selector: "typeLike",
                    format: ["PascalCase"],
                },
            ],
        },
    },
);
