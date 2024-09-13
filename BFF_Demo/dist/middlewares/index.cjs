"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _koa2connecthistoryapifallback = require("koa2-connect-history-api-fallback");
var _koastatic = /*#__PURE__*/ _interop_require_default(require("koa-static"));
var _logcjs = /*#__PURE__*/ _interop_require_default(require("../utils/log.cjs"));
var _indexcjs = /*#__PURE__*/ _interop_require_default(require("../config/index.cjs"));
var _ErrorHandlercjs = /*#__PURE__*/ _interop_require_default(require("./ErrorHandler.cjs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var initMiddlewares = function(app) {
    app.use((0, _koa2connecthistoryapifallback.historyApiFallback)({
        whiteList: _indexcjs.default.whiteList
    }));
    var logger = (0, _logcjs.default)();
    _ErrorHandlercjs.default.error(app, logger);
    app.use((0, _koastatic.default)(_indexcjs.default.staticDir));
};
var _default = initMiddlewares;
