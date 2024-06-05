const Router = require('@koa/router')

const router = new Router();

router.get('/', async ctx => {
    ctx.body = 'hello, router'
})

// router.get('/:id',async ctx =>{
//     const params = ctx.params;
//     ctx.body = 'hello, ' + params.id;
// })

const innerRouter = new Router();
innerRouter.get('/',async ctx => {
    console.log('🐻🐻🐻🐻',ctx.params);
    ctx.body = '我是一个内部路由 /'
})

// innerRouter.get('/:id',async ctx => {
//     console.log('🐻🐻🐻🐻',ctx.params);
//     ctx.body = '我是一个内部路由 /'
// })

router.use('/inner/:pid', innerRouter.routes(),innerRouter.allowedMethods());


module.exports = router;