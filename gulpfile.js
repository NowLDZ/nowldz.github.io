const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'new',
    },
  });
});

gulp.task('sass', function() {
  return gulp
    .src('new/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // Using gulp-sass
    .pipe(sourcemaps.write()) // using sourcemaps
    .pipe(autoprefixer())
    .pipe(gulp.dest('new/css'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('new/scss/**/*.scss', ['sass']);
  // Other watchers
});
