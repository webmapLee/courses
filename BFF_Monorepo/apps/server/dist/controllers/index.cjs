"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "initController", {
    enumerable: true,
    get: function() {
        return initController;
    }
});
var _router = /*#__PURE__*/ _interop_require_default(require("@koa/router"));
var _IndexControllercjs = /*#__PURE__*/ _interop_require_default(require("./IndexController.cjs"));
var _ApiControllercjs = /*#__PURE__*/ _interop_require_default(require("./ApiController.cjs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var router = new _router.default();
var indexController = new _IndexControllercjs.default();
var apiController = new _ApiControllercjs.default();
function initController(app) {
    router.get('/api', indexController.actionIndex);
    router.get('/api/getBookList', apiController.actionBookList);
    app.use(router.routes());
}
