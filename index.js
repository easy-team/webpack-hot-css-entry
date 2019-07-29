'use strict';
/*global __resourceQuery __webpack_public_path__*/
var path = '/__webpack_hmr';
var publicPath = __webpack_public_path__;
if (__resourceQuery) {
  var querystring = require('querystring');
  var params = querystring.parse(__resourceQuery.slice(1));
  path = params.path || path;
  publicPath = params.publicPath || publicPath;
}
if (typeof window === 'object') {
  var hotClient = require('webpack-hot-middleware/client?noInfo=false&reload=true&quiet=false&autoConnect=false');
  var currentHash;
  hotClient.subscribeAll(function(event) {
    if (event.action === 'built' && currentHash) {
      var request = new XMLHttpRequest();
      var requestPath = publicPath + currentHash + '.hot-update.json';
      request.open("GET", requestPath, true);
      request.timeout = 5000;
      request.send(null);
      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if (request.status === 200) {
            try {
              var update = JSON.parse(request.responseText);
              var c = update.c;
              if (!c || JSON.stringify(c) === '{}' || /:true/.test(JSON.stringify(c))) {
                var links = document.getElementsByTagName('link');
                for (var i = 0; i < links.length; i++) {
                  var href = links[i].href;
                  if (href && /\.css$/.test(href)) {
                    links[i].href = href;
                    console.log('[HMR] ' + href + ' updated.');
                  }
                }
              }
            } catch (e) {}
          }
        }
      };
    }
    currentHash = event.hash || currentHash;
  });
  hotClient.setOptionsAndConnect({
    path: 'http://127.0.0.1:9000/__webpack_hmr'
  });
}