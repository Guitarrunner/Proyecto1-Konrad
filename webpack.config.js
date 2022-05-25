const path = require("path");
const { title } = require("process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    clean: true,
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: { watchFiles: ["src/**/*.js", "src/**/*.html", "src/**/*.scss","src/**/*.png"] },
  module: {
    rules: [
      //Saas loader
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //HTML Loader for images
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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Ático Podcast",
      template: "src/index.html",
      filename: "index.html",
    }),
  ],
};
