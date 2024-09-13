class ErrorHandler {
    static error(app, logger) {
        app.use(async (ctx, next) => {
            try {
                await next()
                if (ctx.status === 404) {
                    ctx.status = 404
                    ctx.body = '404'
                }
            } catch (err) {
                logger.error(err)
                ctx.status = err.status || 500
                ctx.body = err.message
            }
        })
    }
}

export default ErrorHandler