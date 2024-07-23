import Controller from './Controller.js';

class IndexController extends Controller {

    async actionIndex(ctx) {
        // ctx.body = 'hi, koa';
        await ctx.render('index', {
            message: 'hello, koa swig'
        })
    }
}

export default IndexController;