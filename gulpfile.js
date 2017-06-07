var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var util = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');
var series = require('stream-series');
var inject = require('gulp-inject');
var path = require('path');
var ngAnnotate = require('gulp-ng-annotate');
var angularNaturalSort = require('gulp-natural-sort');
var angularFilesort = require('gulp-angular-filesort');

//* Paths
const paths = {
  root: './src/'
};


//* Default Task -> gulp
gulp.task('default', [
  'templates',
  'inject',
  'annotate',
  'build-css'
], function() {
  return util.log('Gulp completed all tasks!');
});


//* inject dependencies angularjs
gulp.task('annotate', function() {
    return gulp.src(paths.root + 'app/**/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest(paths.root + 'app'));
});

//* create template cache for all html files
gulp.task('templates', function() {
    return gulp.src(paths.root + 'app/**/*.html')
        .pipe(templateCache({
          root: 'app',
          standalone: true,
          transformUrl: function(url) {
            return url.replace(path.dirname(url), '.')
          }
        }))
        .pipe(gulp.dest(paths.root));
});

//* wrap strict-mode
gulp.task('wrap', function() {
    return gulp.src(paths.root + 'app/**/*.js')
        .pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
        .pipe(gulp.dest(paths.root + 'app'));
});

//* Compiled scss on css
gulp.task('build-css', function() {
  return gulp.src(paths.root + 'sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(paths.root + 'css'));
})

//* Inject all files into index.html
gulp.task('inject', function() {
  var libs = gulp.src(mainBowerFiles());
  var myapp = gulp.src(['!' + paths.root + "bower_components/**/*.js", paths.root + '**/*.js'])
    .pipe(angularNaturalSort())
    .pipe(angularFilesort());

  gulp.src(paths.root + 'index.html')
    .pipe(inject(series(libs, myapp), { relative: true }))
    .pipe(gulp.dest(paths.root));
});

//* Check for errors on .js files onsave
gulp.task('jshint', function() {
  return gulp.src(paths.root + 'app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
})

//* Tasks to watch on real time changes on .js and .scss files
gulp.task('watch', function() {
  gulp.watch(paths.root + 'templates.js' ['templates']);
  gulp.watch(paths.root + 'app/*.js', ['jshint']);
  gulp.watch(paths.root + 'sass/*.scss', ['build-css']);
})
