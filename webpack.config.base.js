import path from 'path';

export default {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  loaders: [
    { test: /\.js$/, loader: 'babel', query: { compact: false } },
    { test: /\.css$/, loaders: ['style', 'css', 'cssnext'] },
    { test: /\.svg$/, loader: "file-loader" },
    { test: /\.woff2?$/, loader: 'url-loader' },
    { test: /\.ttf$/, loader: "url-loader" },
    { test: /\.eot$/, loader: "url-loader" },
    { test: /\.json$/, loader: 'json'}
  ]
}