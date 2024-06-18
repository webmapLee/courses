const interceptor = require('./interceptor');
const renderer = require('./renderer');
const initRouter = require('./router');
const static = require('./static');
const apiFallback = require('./apiFallback');

const init = (app) => {
    interceptor(app);
    renderer(app);
    apiFallback(app);
    static(app);
    initRouter(app);
}

module.exports = {
    init
}