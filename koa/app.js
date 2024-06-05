const Koa = require('koa');
const router = require('./router')
const routerInterceptor = require('./middlewares/interceptor');

const app = new Koa();

routerInterceptor(app);
app.use(router.routes()).use(router.allowedMethods());

const port = 3000
app.listen(port,()=>{
    console.log(`Server is running at http://${port}`)
})