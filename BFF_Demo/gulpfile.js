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


const isProduction = process.env.NODE_ENV === 'production';
const mainPath = './src/server/**/'
const assetsPath = './src/server/assets/**/*';
const viewsPaths = ['src/server/views', 'src/server/components'];
const destDir = 'dist';
const manifestDir = {
    js: 'js-manifest.json',
    css: 'css-manifest.json'
}

gulp.task('clean', () => {
    return gulp.src(destDir, { read: false })
        .pipe(clean())
})

const getMainJsPaths = (dirs) => {
    const ignoreDirs = viewsPaths.concat(assetsPath).map(dir => `!${dir}/**/*`);
    return dirs.map(dir => dir + '/**/*.js').concat(ignoreDirs);
}
gulp.task('main', () => {
    const mainPaths = getMainJsPaths([mainPath])
    return gulp.src(mainPaths)
        .pipe(swc({
            module: {
                type: 'es6'
            }
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
        base: 'src/server'
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

gulp.task('views', gulp.series(['views_js', 'views_css', 'views_html']))

gulp.task('build', gulp.series(['clean', 'main', 'views', 'assets']))