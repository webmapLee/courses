const views = require('@ladjs/koa-views')
const path = require('path')

const renderer = (app) => {
    app.use(views(path.join(__dirname, '../views'), {
        extension: 'ejs',
        map: { html: 'ejs' },
    }))
}

module.exports = renderer