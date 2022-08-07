const path = require("path");

const config =
{
    devtool: "source-map",
    entry: "./index.ts",
    mode: "development",

    module: {
        rules: [
            {
                exclude: /node_modules|tests/,
                loader: "ts-loader",
                test: /\.ts$/,
            }
        ]
    },

    optimization: {
        minimize: true,
    },

    output: {
        path: path.resolve("./dist"),
        filename: "index.js",
    },
};

module.exports = config;