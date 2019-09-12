module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: '[name].[hash]',
        },
      },
    ],
  },
};
