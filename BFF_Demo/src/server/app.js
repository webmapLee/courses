import koa from 'koa';
import config from './config/index.js';
import { initController } from './controllers/index.js';
import initRender from './utils/render.js';
import initMiddlewares from './middlewares/index.js';


const app = new koa();
initRender(app);
initMiddlewares(app);
initController(app);


const { port } = config
app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`);
});