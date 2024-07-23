import Router from '@koa/router';
import IndexController from './IndexController.js';
import ApiController from './ApiController.js';

const router = new Router();
const indexController = new IndexController();
const apiController = new ApiController();

export function initController(app) {
    router.get('/api', indexController.actionIndex);
    router.get('/api/getBookList', apiController.actionBookList)
    app.use(router.routes());
}
