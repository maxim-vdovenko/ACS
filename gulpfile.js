const gulp    = require('gulp'),
  babel       = require('gulp-babel'),
  scss        = require('gulp-sass'),
  concat      = require('gulp-concat'),
  uglify      = require('gulp-uglify'),
  cssnano     = require('gulp-cssnano'),
  rename      = require('gulp-rename'),
  del         = require('del'),
  fileinclude = require('gulp-file-include'),
  browserSync = require('browser-sync').create();

const src = 'src';
const dist = 'dist';

gulp.task('scss', () => {
  return gulp.src(src + '/scss/style.scss')
    .pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError))
    .pipe(gulp.dest(dist + '/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', () => {
  return gulp.src([
        src + '/js/**/*.*'
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(dist + '/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js-plugins', () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js',
    'node_modules/jquery-ui-dist/jquery-ui.min.js',
    'node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
    'node_modules/gsap/dist/gsap.min.js',
    'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
    'node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'
  ])
  .pipe(concat('plugins.min.js'))
  .pipe(gulp.dest(dist + '/js'));
});

gulp.task('html', () => {
  return gulp.src(src + '/html/*.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(dist + '/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', () => {
  return gulp.src(src + '/img/**/*.*')
    .pipe(gulp.dest(dist + '/img'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', () => {
  return gulp.src(src + '/images/**/*.*')
    .pipe(gulp.dest(dist + '/images'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', () => {
  return del([dist + '/']);
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
        baseDir: dist
    },
    notify: false 
  });
});

gulp.task('watch', () => {
  gulp.watch(src + '/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch(src + '/js/**/*.*', gulp.parallel('js'));
  gulp.watch(src + '/html/**/*.html', gulp.parallel('html'));
  gulp.watch(src + '/img/**/*.*', gulp.parallel('img'));
  gulp.watch(src + '/images/**/*.*', gulp.parallel('images'));
});

gulp.task('default', 
  gulp.series('clean', 
    gulp.parallel('watch', 'scss', 'js', 'js-plugins', 'html', 'img', 'images', 'browser-sync')
  )
); 
