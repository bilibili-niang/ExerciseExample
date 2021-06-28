const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");



module.exports = {
  devServer: {
    hot: true
  },
  devtool: 'eval-cheap-module-source-map',
  mode: "production", // "production" | "development"
  entry: "./src/js/index.js",
  output: {
    filename: "js/index.js",
    path: path.resolve(__dirname, "bundle"),
  },
  module: {
    rules: [
      {
        test: /\.txt$/, use: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 指定图片限制的大小
            limit: 1024,
            // 指定打包后文件名称
            name: '[name].[ext]',
            // 指定打包后文件存放目录
            outputPath: 'images/',

            esModule: false //解决方法
          }
        }]
      },
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // lessloader
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings,
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  // 按需加载
                  useBuiltIns: 'usage',
                  corejs: { version: 3 },
                  targets: {
                    chrome: '60',
                    firefox: '50',
                  },
                },
              ],
            ],
          },
        }
      },

    ]

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false, //是否自动在模板文件添加 自动生成的js文件链接
      minify: {
        // 告诉htmlplugin打包之后的html文件需要压缩
        collapseWhitespace: false,
      },
      // minify: false
    }),
    /* new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }), */
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],


};