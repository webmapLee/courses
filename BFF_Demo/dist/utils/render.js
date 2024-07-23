import coModule from 'co';
import renderer from 'koa-swig';
import config from '../config/index.js';
function initRender(app) {
    app.context.render = coModule.wrap(renderer({
        root: config.renderDir,
        autoescape: true,
        cache: 'memory',
        varControls: [
            '[[',
            ']]'
        ]
    }));
}
export default initRender;
