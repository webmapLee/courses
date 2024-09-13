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
var _log4js = /*#__PURE__*/ _interop_require_default(require("log4js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getNodeLogger = function() {
    var logger = _log4js.default.getLogger();
    _log4js.default.configure({
        appenders: {
            cheese: {
                type: "file",
                filename: "logs/cheese.log"
            }
        },
        categories: {
            default: {
                appenders: [
                    "cheese"
                ],
                level: "error"
            }
        }
    });
    logger.level = "debug";
    return logger;
};
var _default = getNodeLogger;
