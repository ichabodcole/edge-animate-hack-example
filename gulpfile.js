'use strict';

var env = process.env.NODE_ENV || 'development';
var path = require('path');

var gulp        = require('gulp'),
    del         = require('del'),
    browserify  = require('browserify'),
    browserSync = require('browser-sync'),
    babelify    = require('babelify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    jsStylish   = require('jshint-stylish'),
    tplCache    = require('gulp-angular-templatecache'),
    gutil       = require('gulp-util'),
    karma       = require('karma').server,
    reload      = browserSync.reload;

var $ = require('gulp-load-plugins')();

var config = require('./build.config.js');

// gulp.task(watch);
gulp.task(bundleVendor);
gulp.task('scripts', gulp.parallel(bundleApp, bundleVendor));
gulp.task('serve', gulp.parallel(styles, templates, gulp.series(jshint, 'scripts', serve)));


/*************************************
  *   Watch the files for changes
**************************************/

// function watch() {
    gulp.watch(config.sass.src, styles);
    gulp.watch(config.html.entry, reload);
    gulp.watch(config.html.src, gulp.series(templates, reload));
    gulp.watch(config.js.src, gulp.series(jshint, bundleApp, reload));
// }

/*************************************
  *  Serve the files for development
**************************************/

function serve() {
    browserSync({
        server: {
            port: 9000,
            baseDir: [
                path.join(__dirname, 'src'),
                path.join(__dirname, '.tmp'),
                path.join(__dirname, 'node_modules')
            ]
        }
    });
}

/*************************************
  *      Lint the Javascript
**************************************/

function jshint() {
    return gulp.src(config.js.src)
        .pipe($.cached('linting'))
        .pipe($.jshint())
        .on('error', handleError)
        .pipe($.jshint.reporter(jsStylish));
}

/*************************************
  *     Bundle the App files
**************************************/

function bundleApp(done) {
    var bundler = browserify({
        cache: {},
        packageCache: {},
        // fullPaths:true,
        debug: true,
        entries: config.js.entry,
        extensions: ['.js', '.es6'],
        noparse: config.libs.map(function(el, index) {
            if(el.expose) {
                return el.expose;
            } else {
                return el.require;
            }
        })
    })
    .transform(babelify);

    config.libs.forEach(function(lib) {
        if(lib.expose) {
            bundler.external(lib.expose);
        } else {
            bundler.external(lib.require);
        }
    });

    bundler
        .bundle()
        .on('error', handleError)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe($.sourcemaps.init({loadMaps:true}))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(config.js.dest.dev))
        .on('end', done);

    bundler.on('log', gutil.log);
}

/*************************************
  *    Bundle the static libs
**************************************/

function bundleVendor(done) {
    var bundler = browserify({
        entries: './vendor.js',
        debug: false
    });

    bundler.add('./node_modules/babelify/polyfill');

    config.libs.forEach(function(lib) {
        if(lib.expose) {
            bundler.require(lib.require, { expose: lib.expose });
        } else {
            bundler.require(lib.require);
        }
    });

    bundler
        .bundle()
        .on('error', handleError)
        .pipe(source('libs.js'))
        .pipe(gulp.dest(config.js.dest.dev))
        .on('end', done);
}

/*************************************
  *     Compile the sass files
**************************************/

function styles() {
    return gulp.src(config.sass.entry)
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe($.rename('app.css'))
        .pipe(gulp.dest(config.sass.dest.dev))
        .pipe(reload({stream: true}));
}

/*************************************
  *   Cache the template files
**************************************/

function templates() {
    return gulp.src(config.html.src)
        .pipe(tplCache({ module: 'bb' }))
        .pipe(gulp.dest(config.html.dest.dev));
}


/*************************************
  *   Clean out the build folders
**************************************/

function clean (done) {
    del([config.build], done);
}

/*************************************
  *         Karma Tests
**************************************/

function tdd (done) {
    karma.start({
        configFile: path.join(__dirname, 'karma.conf.js'),
        singleRun: false,
        autoWatch: true
    }, done);
}

function test (done) {
    karma.start({
        configFile: path.join(__dirname, 'karma.conf.js'),
        singleRun: true,
    }, done);
}

/*************************************
  *      Helper Functions
**************************************/

function handleError(err) {
    console.error(err.toString());
    //console.error('BURP');
    process.stdout.write('\x07');
    this.emit('end');
}
