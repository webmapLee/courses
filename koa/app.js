const Koa = require('koa');
const { init } = require('./middlewares');

const app = new Koa();

init(app);

const port = 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})