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
var _co = /*#__PURE__*/ _interop_require_default(require("co"));
var _koaswig = /*#__PURE__*/ _interop_require_default(require("koa-swig"));
var _indexcjs = /*#__PURE__*/ _interop_require_default(require("../config/index.cjs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initRender(app) {
    app.context.render = _co.default.wrap((0, _koaswig.default)({
        root: _indexcjs.default.renderDir,
        autoescape: true,
        cache: 'memory',
        varControls: [
            '[[',
            ']]'
        ]
    }));
}
var _default = initRender;
