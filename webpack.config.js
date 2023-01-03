const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const dotenv = require("dotenv");
const prod = process.env.NODE_ENV === "production";
dotenv.config();
module.exports = {
  mode: prod ? "production" : "development",
  devtool: prod ? "hidden-source-map" : "eval",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    proxy: {
      "/api/": {
        target: "http://openapitraffic.daejeon.go.kr",
        changeOrigin: true,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },

  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js",
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify(
        process.env.NODE_ENV === "development"
          ? process.env.API_URL
          : process.env.API_BUILD_URL
      ),
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_SERVICE_KEY": JSON.stringify(
        process.env.REACT_APP_SERVICE_KEY
      ),
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "public/favicon-32x32.png",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
