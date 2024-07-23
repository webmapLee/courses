import koa from 'koa';
import config from './config/index.js';
import { initController } from './controllers/index.js';
import initRender from './utils/render.js';
import initMiddlewares from './middlewares/index.js';
var app = new koa();
initRender(app);
initMiddlewares(app);
initController(app);
var port = config.port;
app.listen(port, function() {
    console.log("server is listening on http://localhost:".concat(port));
});
