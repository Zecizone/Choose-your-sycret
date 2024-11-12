const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/, // Обработка файлов .js
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader', // Загрузчик для Babel
        },
    },
    {
        test: /\.css$/, // Обработка файлов .css
        use: ['style-loader', 'css-loader'], // Загрузчики для CSS
    },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }, // Обновленное свойство
    compress: true,
    port: 3000,
    open: true, // Открывать браузер автоматически
  },
};
