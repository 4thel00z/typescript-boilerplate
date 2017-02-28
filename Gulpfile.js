const gulp = require("gulp");
const browserify = require("browserify");
const typescript = require("gulp-typescript");
const rename = require("gulp-rename");
const typescriptProject = typescript.createProject('tsconfig.json');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');


gulp.task('default', []);


gulp.task('browserify', function () {

    const browsy = browserify({
        entries: 'dist/js/index.js',
        debug: true
    });

    browsy.bundle()
        .pipe(source('dist/js/index.js'))
        .pipe(buffer())
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest('dist/js'));

});
gulp.task('browserifyWatch', function () {
});

gulp.task('typescript', function () {

    var compiledData = gulp.src('*.ts')
        .pipe(typescriptProject());



    compiledData.js
        .pipe(gulp.dest('dist/js'));
});

gulp.task('typescriptWatch', function () {
});