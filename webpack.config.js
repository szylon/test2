var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/dist')
    .setPublicPath('/dist')


    // style domyslne dla strony
    .addStyleEntry('css/global/default', './assets/global/style/default/main.scss')
    .addStyleEntry('css/global/contrast', './assets/global/style/contrast/main.scss')
    .addStyleEntry('css/global/mourning', './assets/global/style/mourning/main.scss')

    .addEntry('js/global/main', './assets/global/js/main.js')
    .addEntry('js/global/main.defer', './assets/global/js/main.defer.js')

    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader();

module.exports = Encore.getWebpackConfig();