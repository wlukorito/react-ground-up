const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve("dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        devMiddleware:{
            publicPath:"http://localhost:3000/dist/",
        },
        hot: "only",
        port: 3000,
        compress: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}