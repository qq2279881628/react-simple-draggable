const path = require("path");

let rules = [
  {
    test: /\.(js|jsx)$/,
    include: [path.resolve(__dirname, "../src")],
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
    include: path.resolve(__dirname, "../node_modules"),
    exclude: path.resolve(__dirname, "../src"),
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
  }
];
rules.push(
  ...[
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
      include: path.resolve(__dirname, "../src"),
      exclude: path.resolve(__dirname, "node_modules")
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, "../src"),
      exclude: path.resolve(__dirname, "node_modules")
    }
  ]
);

module.exports = rules;
