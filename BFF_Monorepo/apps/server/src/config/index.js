import { join } from 'path';
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')
let config = {
    renderDir: join(__dirname, '../views'),
    staticDir: join(__dirname, '../assets'),
    whiteList: ['/api']
}


if (process.env.NODE_ENV === 'production') {
    const prodConfig = {
        port: 4000,
    }
    config = { ...config, ...prodConfig }
} else {
    const devConfig = {
        port: 3000,
    }
    config = { ...config, ...devConfig }
}

export default config;