var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .cleanupOutputBeforeBuild()

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()
    // parameters are not mandatory, only if webpack build is slow with bootstrap (http://symfony.com/doc/current/frontend/encore/bootstrap.html)
    // .enableSassLoader(function(sassOptions) {}, {
    //     resolveUrlLoader: false,
    // })

    .enableSourceMaps(!Encore.isProduction())

    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .enableVueLoader()

    // uncomment to define the assets of the project
    .addEntry('index',
        [
            './assets/vuejs/main.js',
            './assets/scss/index.scss'
        ])

    // this creates a 'vendor.js' file with jquery and the bootstrap JS module
    // these modules will *not* be included in page1.js or page2.js anymore
    // .createSharedEntry('vendors', [
    //     'bootstrap'
    // ])
;

module.exports = Encore.getWebpackConfig();
