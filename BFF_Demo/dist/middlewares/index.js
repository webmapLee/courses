import { historyApiFallback } from 'koa2-connect-history-api-fallback';
import serve from 'koa-static';
import getNodeLogger from '../utils/log.js';
import config from '../config/index.js';
import ErrorHandler from './ErrorHandler.js';
var initMiddlewares = function(app) {
    app.use(historyApiFallback({
        whiteList: config.whiteList
    }));
    var logger = getNodeLogger();
    ErrorHandler.error(app, logger);
    app.use(serve(config.staticDir));
};
export default initMiddlewares;