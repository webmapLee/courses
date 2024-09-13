import co from 'co';
import render from 'koa-swig';
import config from '../config/index.js';

function initRender(app) {
    app.context.render = co.wrap(render({
        root: config.renderDir,
        autoescape: true,
        cache: 'memory',
        varControls: ['[[', ']]'],
    }))
}

export default initRender;