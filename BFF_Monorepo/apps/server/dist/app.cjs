"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _koa = /*#__PURE__*/ _interop_require_default(require("koa"));
var _indexcjs = /*#__PURE__*/ _interop_require_default(require("./config/index.cjs"));
var _indexcjs1 = require("./controllers/index.cjs");
var _rendercjs = /*#__PURE__*/ _interop_require_default(require("./utils/render.cjs"));
var _indexcjs2 = /*#__PURE__*/ _interop_require_default(require("./middlewares/index.cjs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
console.log('******** 环境变量', _indexcjs.default);
var app = new _koa.default();
(0, _rendercjs.default)(app);
(0, _indexcjs2.default)(app);
(0, _indexcjs1.initController)(app);
var port = _indexcjs.default.port;
app.listen(port, function() {
    console.log("server is listening on http://localhost:".concat(port));
});
