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
import { join } from 'path';
import { fileURLToPath } from 'node:url';
var __filename = fileURLToPath(import.meta.url);
var __dirname = join(__filename, '..');
var config = {
    renderDir: join(__dirname, '../views'),
    staticDir: join(__dirname, '../assets'),
    whiteList: [
        '/api'
    ]
};
if (process.env.NODE_ENV === 'production') {
    var prodConfig = {
        port: 4000
    };
    config = _object_spread({}, config, prodConfig);
} else if (process.env.NODE_ENV === 'development') {
    var devConfig = {
        port: 3000
    };
    config = _object_spread({}, config, devConfig);
}
export default config;
