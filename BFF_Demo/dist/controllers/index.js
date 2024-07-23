import Router from '@koa/router';
import IndexController from './IndexController.js';
import ApiController from './ApiController.js';
var router = new Router();
var indexController = new IndexController();
var apiController = new ApiController();
export function initController(app) {
    router.get('/api', indexController.actionIndex);
    router.get('/api/getBookList', apiController.actionBookList);
    app.use(router.routes());
}
