const routerInterceptor = (app) => {
    app.use(async (ctx,next) => {
        console.log('我拦截的地址', ctx.request.path);
        await next();
        ctx.body = '我拦截了一个地址 😂😂😂😂😂'
    })
}
module.exports = routerInterceptor;