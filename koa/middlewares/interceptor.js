const interceptor = (app) => {
    app.use(async (ctx, next) => {
        await next();
        if (!ctx.body) {
            ctx.body = '404'
        }
    })
}
module.exports = interceptor;