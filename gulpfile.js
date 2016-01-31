var gulp = require('gulp');

var concat = require('gulp-concat');
var karma = require('karma').Server;
var uglify = require('gulp-uglify');

gulp.task('minify-js', function () {
    return gulp
        .src([
            'source/shoebox.js',
            'source/shoebox.model.js',
            'source/shoebox.collection.js'
        ])
        .pipe(concat('shoebox.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['minify-js'], function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});