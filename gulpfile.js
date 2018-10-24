var gulp = require('gulp')
var sass = require('gulp-sass')
var connect = require('gulp-connect')
var clean = require('gulp-clean')

gulp.task('styles',['clean'], function() {
  gulp
    .src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload())  //自動重新整理
    .pipe(notify({ message: 'Scripts is OK' })) //提醒任務完成
})

gulp.task('connect', function() {
  connect.server({
    port: '3333',
    livereload: true
  })
})

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['styles'])
})

gulp.task('clean', function () {
  return gulp.src('css/', {read: false})
    .pipe(clean());
})

gulp.task('default', ['connect', 'watch']);