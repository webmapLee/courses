Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});var _co=_interop_require_default(require("co")),_koaswig=_interop_require_default(require("koa-swig")),_indexcjs=_interop_require_default(require("../config/index.cjs"));function _interop_require_default(e){return e&&e.__esModule?e:{default:e}}function initRender(e){e.context.render=_co.default.wrap((0,_koaswig.default)({root:_indexcjs.default.renderDir,autoescape:!0,cache:"memory",varControls:["[[","]]"]}))}var _default=initRender;