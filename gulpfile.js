var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');



gulp.task('styles', function () {
    return gulp.src('./dist/assets/css/mainStyle.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/assets/'))
});

gulp.task('minify-css', function() {
  return gulp.src('./dist/assets/mainStyle.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'));
});
