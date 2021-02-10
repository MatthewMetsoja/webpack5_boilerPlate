const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/template.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    'style-loader', //3. Injects styles into DOM
                    'css-loader', //2. Turns css into commonjs
                    "postcss-loader", // adds prefixes
                    "sass-loader" //1. Turns sass into css
                ],
            }
        ],
    }
});