const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const cssnano = require('cssnano');

gulp.task('postcss', () => {
  const processors = [
    atImport,
    cssnano
  ];

  return gulp.src('import.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./dist'));
});
