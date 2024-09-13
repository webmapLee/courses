import Controller from './Controller.js';

class ApiController extends Controller {
    async actionBookList(ctx, next) {
        await next();
        // throw new Error('这是一个错误❌！');
        ctx.body = {
            code: 0,
            data: [
                {
                    id: 1,
                    name: 'book1'
                },
                {
                    id: 2,
                    name: 'book2'
                }
            ]
        }
    }
}

export default ApiController;