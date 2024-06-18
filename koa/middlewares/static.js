const static = require('koa-static');
const send = require('koa-send');
const path = require('path');

module.exports = (app) => {
    app.use(static(path.join(__dirname, '../public'), {
        gzip: true,
        index: 'index.html',
    }))
    // app.use(async ctx => {
    //     await send(ctx, ctx.path, {
    //         root: path.join(__dirname, '../public'),
    //         index: 'index.html'
    //     })
    // })
}