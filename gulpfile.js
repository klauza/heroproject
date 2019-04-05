const gulp = require('gulp');
const sass = require('gulp-sass');
//const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// compile scss -> css
function style(){
  //dir of scss file
  return gulp.src('./src/css/index.scss')
  .pipe(sass()) //compiler
  .pipe(autoprefixer()) //vendor prefixes
  .pipe(gulp.dest('./src/')) //output folder
  
}

function watch(){
  
  gulp.watch('./src/scss/**/*.scss', style) //watch( './scss/**/*.scss, style' )
  gulp.watch('./src/css/**/*.scss', style) 

}

exports.style = style;
exports.watch = watch;