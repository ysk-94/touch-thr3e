const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// compile-sass
const compileSass = () => {
  return (
    src('app/scss/index.scss')
    .pipe(
      sass({outputStyle: 'expanded'})
      .on('error', sass.logError)
    )
    .pipe(dest('public/assets/css'))
  )
}

// watch
const watchFiles = () => watch(['app/scss/**/*'], compileSass);

exports.default = watchFiles;
