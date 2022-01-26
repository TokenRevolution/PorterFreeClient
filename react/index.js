(function $csb$eval(require, module, exports, process, global, __dirname, __filename, $csbImport) {'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

//# sourceURL=https://k23w5.csb.app/node_modules/react/index.js
})