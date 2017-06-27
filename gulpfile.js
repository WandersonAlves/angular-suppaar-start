var gulp = require('gulp'),
    copy = require('gulp-copy2'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    clean = require('gulp-clean'),
    wiredep = require('wiredep').stream,
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-clean-css'),
    useref = require('gulp-useref'),
    htmlreplace = require('gulp-html-replace'),
    ngAnnotate = require('gulp-ng-annotate'),
	reload = browserSync.reload,
    pump = require('pump');

// build js files uglifying and concating then
gulp.task('build-js', function() {
    'use strict';
    return pump([
        gulp.src('./app/index.html'),
        wiredep({directory: './app/bower_components'}),
        useref(),
        gulpif('*.js', ngAnnotate()),
        gulpif('*.js', uglify()),
        gulpif('*.js', gulp.dest('./public'))
    ]);
});

gulp.task('build-css', function() {
    return pump([
        gulp.src('./app/index.html'),
        useref(),
        gulpif('*.css', minifyCss()),
        gulpif('*.css', gulp.dest('./public'))
    ]);
});

gulp.task('copy', function() {
    'use strict';
    var paths = [{
        src: './app/res/**/',
        dest: './public/res/'
    }, {
        src: './app/views/**/',
        dest: './public/views/'
    }, {
        src: './app/manifest.json',
        dest: './public/manifest.json'
    }, {
        src: './app/service-worker.js',
        dest: './public/service-worker.js'
    }, {
        src: './app/push-config.js',
        dest: './public/push-config.js'
    }, {
        src: './app/mocks/**/',
        dest: './public/mocks/'
    }];
    // NOTE Use templateCache to keepViews inline
    return copy(paths);
});

gulp.task('image-min', function() {
    'use strict';
    return pump([
        gulp.src(['app/res/assets/**/*']),
        imagemin([
            imagemin.gifsicle(),
            imagemin.jpegtran(),
            imagemin.optipng(),
            imagemin.svgo(),
            imageminJpegRecompress({
                method: 'smallfry'
            })
        ], {
            verbose: true
        }),
        gulp.dest('./public/res/assets')
    ]);
});

gulp.task('clean', function() {
    'use strict';
    return pump([
        gulp.src('public/', {read: false}),
        clean({force: true})
    ]);
});

gulp.task('html-replace', function() {
    'use strict';
    pump([
        gulp.src('app/index.html'),
        useref({noAssets: true}),
        gulp.dest('public')
    ]);
});

gulp.task('build', function() {
    'use strict';
    runSequence('clean', 'build-js', 'build-css', 'html-replace', 'copy');
});

gulp.task('server', function() {
    'use strict';
    browserSync.init({
        server: {
            baseDir: "app"
        },
        port: 8080
    });

		gulp.watch("app/controllers/**/.*js").on("change", reload);
});
