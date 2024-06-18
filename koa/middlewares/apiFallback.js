const { historyApiFallback } = require('koa2-connect-history-api-fallback')

// module.exports = (app) => {
//     app.use(historyApiFallback({
//         index: '/index.html',
//         verbose: false,
//         whiteList: ['api']
//     }))
// }


module.exports = (app, { index, whiteList } = { index: 'index.html', whiteList: [] }) => {
    app.use(async (ctx, next) => {
        if (whiteList) {
            let isFlag = false
            whiteList.forEach((item) => {
                if (!isFlag) isFlag = new RegExp(item).test(ctx.url)
            })
            if (isFlag) return next()
        }
        ctx.url = index || '/index.html'
        await next();
    })

}