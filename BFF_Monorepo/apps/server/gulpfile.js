import gulp from 'gulp';
import gulpIf from 'gulp-if';
import swc from 'gulp-swc';
import uglify from 'gulp-uglify';
import clean from 'gulp-clean';
import rev from 'gulp-rev';
import postcss from 'gulp-postcss';
import revReplace from 'gulp-rev-replace';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import postcssNested from 'postcss-nested';
import postcssReporter from 'postcss-reporter';
import cssnano from 'cssnano';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import path from 'path';

const __dirname = import.meta.url.split('/').slice(0, -1).join('/');
const isProduction = process.env.NODE_ENV === 'production';
const mainPath = './src/**/'
const assetsPath = './src/assets/**/*';
const viewsPaths = ['./src/views', './src/components'];
const destDir = isProduction ? '../../dist' : './dist';
console.log('*** isProduction', isProduction)

const manifestDir = {
    js: 'js-manifest.json',
    css: 'css-manifest.json'
}

const getMainJsPaths = (dirs) => {
    const ignoreDirs = viewsPaths.concat(assetsPath).map(dir => `!${dir}/**/*`);
    return dirs.map(dir => dir + '/**/*.js').concat(ignoreDirs);
}
gulp.task('main', () => {
    const mainPaths = getMainJsPaths([mainPath])
    return gulp.src(mainPaths)
        .pipe(replace(/from\s+'(.+?)\.js'/g, "from '$1.cjs'"))
        .pipe(swc({
            module: {
                type: 'commonjs'
            }
        }))
        // .pipe(replace(/require\('(.+?)\.js'\)/g, "require('$1.cjs')"))
        .pipe(rename({
            extname: '.cjs'
        }))
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulp.dest(destDir))
})

gulp.task('views_js', () => {
    const views_js_path = viewsPaths.map(path => path + '/**/*.js')
    return gulp.src(views_js_path)
        .pipe(swc({
            module: {
                type: 'systemjs'
            }
        }))
        .pipe(rev())
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulp.dest(destDir + '/assets'))
        .pipe(rev.manifest(manifestDir.js))
        .pipe(gulp.dest(destDir))
})

gulp.task('views_css', () => {
    const views_css_path = viewsPaths.map(path => path + '/**/*.css')
    const plugins = [
        autoprefixer({
            cascade: false
        }),
        postcssPresetEnv(),
        postcssImport(),
        postcssUrl(),
        postcssNested(),
        postcssReporter({
            clearReportedMessages: true
        }),
    ]
    if (isProduction) {
        plugins.push(cssnano())
    }

    return gulp.src(views_css_path)
        .pipe(postcss(plugins))
        .pipe(rev())
        .pipe(gulp.dest(destDir + '/assets'))
        .pipe(rev.manifest(manifestDir.css))
        .pipe(gulp.dest(destDir))
})

gulp.task('views_html', () => {
    const views_html_path = viewsPaths.map(path => path + '/**/*.html')
    return gulp.src(views_html_path, {
        base: 'src/'
    })
        .pipe(revReplace({
            manifest: gulp.src(`${destDir}/${manifestDir.js}`),
            prefix: ''
        }))
        .pipe(revReplace({
            manifest: gulp.src(`${destDir}/${manifestDir.css}`),
            prefix: ''
        }))
        .pipe(gulpIf(isProduction, htmlmin({
            collapseWhitespace: true,
            removeComments: true,
        })))
        .pipe(gulp.dest(destDir))
})

gulp.task('assets', () => {
    return gulp.src(assetsPath)
        .pipe(gulp.dest(destDir + '/assets'))
})

gulp.task('package', () => {
    return gulp.src('./package.json')
        .pipe(replace(/"type":\*"module"/, '"type": "commonjs"'))
        .pipe(replace("src/app.js", "app.cjs"))
        .pipe(gulp.dest(destDir))
})

gulp.task('views', gulp.series(['views_js', 'views_css', 'views_html']))

gulp.task('build', gulp.series(['main', 'views', 'assets', 'package']))