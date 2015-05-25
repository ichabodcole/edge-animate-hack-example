var path = require('path');

var src_dir = './src',
    app_dir = './src/app',
    dev_dir = '.tmp',
    prod_dir = './dist';

var config = {
    src: src_dir,
    dest: {
        dev: dev_dir,
        prod: prod_dir
    },

    js: {
        entry: './src/app/app.js',
        src: path.join(app_dir, '/**/*.js'),
        dest: {
            dev: path.join(dev_dir, '/js'),
            prod: path.join(prod_dir, '/js')
        }
    },

    sass: {
        entry: path.join(src_dir, '/sass/main.scss'),
        src: path.join(src_dir, '/**/*.scss'),
        dest: {
            dev: path.join(dev_dir, '/styles'),
            prod: path.join(prod_dir, '/styles')
        }
    },

    html: {
        entry: path.join(src_dir, '/index.html'),
        src: path.join(app_dir, '/**/*.html'),
        dest: {
            dev: path.join(dev_dir, '/js'),
            prod: path.join(prod_dir, '/js')
        }
    },

    libs: [
        { require: 'angular' },
        { require: 'angular-animate' },
        { require: 'angular-ui-router' },
        { require: 'angular-sanitize' },
        { require: 'edge-animate-hack', expose: 'edge' }
    ]
};

module.exports = config;
