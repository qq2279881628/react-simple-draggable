const path = require("path");
const resolve = require("./config/resolve.config.js");

module.exports = {
  mode: "development",
  entry: "./demo/src/main.js",
  output: {
    path: path.resolve(__dirname, "./demo/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "./demo/src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"],
            plugins: ["transform-object-rest-spread", "transform-runtime", "dynamic-import-webpack"],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(png|gif|jpg|svg|jpeg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        include: path.resolve(__dirname, "node_modules"),
        exclude: path.resolve(__dirname, "./demo/src"),
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader?modules",
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              javascriptEnabled: true
            }
          }
        ],
        include: path.resolve(__dirname, "./demo/src"),
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "./demo/src"),
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  },
  resolve: resolve,
  devtool: "source-map"
};
