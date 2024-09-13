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
var _path = require("path");
var _nodeurl = require("node:url");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var __filename1 = (0, _nodeurl.fileURLToPath)(require("url").pathToFileURL(__filename).toString());
var __dirname = (0, _path.join)(__filename1, '..');
var config = {
    renderDir: (0, _path.join)(__dirname, '../views'),
    staticDir: (0, _path.join)(__dirname, '../assets'),
    whiteList: [
        '/api'
    ]
};
if (process.env.NODE_ENV === 'production') {
    var prodConfig = {
        port: 4000
    };
    config = _object_spread({}, config, prodConfig);
} else {
    var devConfig = {
        port: 3000
    };
    config = _object_spread({}, config, devConfig);
}
var _default = config;
