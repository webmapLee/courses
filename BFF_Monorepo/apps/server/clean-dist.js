import shelljs from 'shelljs';

const isProduction = process.env.NODE_ENV === 'production';
const destDir = isProduction ? '../../dist' : './dist';
if (shelljs.test('-d', '../../dist')) {
    shelljs.rm('-rf', `${destDir}/**`)
} else {
    shelljs.mkdir('-p', destDir)
}
