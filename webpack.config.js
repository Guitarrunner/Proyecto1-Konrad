const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { title } = require("process");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devServer: { watchFiles: ["src/**/*.js", "src/**/*.html", "src/**/*.scss","src/**/*.png"] },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
    }
],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Proyecto1",
      template: "src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
