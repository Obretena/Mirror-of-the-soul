const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
    devServer: {
      static: {
        directory: path.join(__dirname, "app"),
      },
      hot: "only",
    port: 8080,
    host: '0.0.0.0'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader?url=false", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
      }
    ]
  }
}