var merge = require('broccoli-merge-trees');
var sass = require('broccoli-sass');
var funnel = require('broccoli-funnel');
var injectLivereload = require('broccoli-inject-livereload');

var publicWithReload = injectLivereload('public');

var includePaths = [
    'assets/scss',
    'bower_components/reset-css',
    'bower_components/bourbon/app/assets/stylesheets',
    'bower_components/fontawesome/scss',
    'bower_components/neat/app/assets/stylesheets'
];

var vendor = funnel('bower_components', {
    files: ['handlebars/handlebars.js', 'jquery/dist/jquery.min.js']
});

var compiledCss = sass (includePaths, 'app.scss', 'app.css');

module.exports = merge([publicWithReload, 'assets/js', compiledCss, vendor]);
