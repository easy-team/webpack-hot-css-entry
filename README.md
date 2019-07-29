# webpack-hot-css-entry

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/webpack-hot-css-entry.svg?style=flat-square
[npm-url]: https://npmjs.org/package/webpack-hot-css-entry
[download-image]: https://img.shields.io/npm/dm/webpack-hot-css-entry.svg?style=flat-square
[download-url]: https://npmjs.org/package/webpack-hot-css-entry


Webpack css hot reload, this plugin depends on webpack-hot-middleware.

## Install

```
npm install webpack-hot-css-entry --save-dev
```

## Usage

```javascript
// ${roo}/webpack.config.js
module.exports = {
  entry: {
    app: [
      'react-hot-loader/babel',
      'webpack-hot-css-entry?path=/__webpack_hmr&pubicPath=/public/',
      'webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=false&reload=false&quiet=false',
      './src/app.js',
    ]
  }
}
```

## Configuration

The options are implemented by by Webpack Plugin global var `__resourceQuery`.

### path

Type: String
Default: /__webpack_hmr

Hot Reload Url for webpack-hot-middleware

### publicPath

Type: String
Default: [__webpack_public_path__](https://webpack.docschina.org/api/module-variables/)

Webpack config publicPath

## License

[MIT](LICENSE)
