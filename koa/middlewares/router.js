const Router = require('@koa/router')

const router = new Router();

router.get('/server', async ctx => {
    await ctx.render('index', {
        title: 'ejs',
        content: 'hello, ejs'
    })
})

router.get('/api/getUsers', async ctx => {
    ctx.body = [{
        name: '张三',
        age: 18
    }]
})

const innerRouter = new Router();
innerRouter.get('/', async ctx => {
    console.log('🐻🐻🐻🐻', ctx.params);
    ctx.body = '我是一个内部路由 /'
})

router.use('/inner/:pid', innerRouter.routes(), innerRouter.allowedMethods());



const initRouter = (app) => {
    app.use(router.routes(), router.allowedMethods())
}
module.exports = initRouter;