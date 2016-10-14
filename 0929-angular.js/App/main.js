/**
 * 前端模块配置
 */
require.config({
    baseUrl: './src',
    paths: {
        'app': '../app',
        'css': '../lib/js/css.min',
        'jquery': '../lib/js/jquery.min',
        'angular': '../lib/js/angular.min',
        'underscore': '../lib/js/underscore-min',
        'uiRoute': '../lib/js/angular-ui-router.min',
        'bootstrap':'../lib/js/bootstrap.min',
        'bootstrapValidator':'../lib/js/bootstrapValidator.min'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'bootstrap': {
            exports: '$',
            deps: ['jquery']
        },
        'uiRoute': {
            exports: 'uiRoute',
            deps: ['angular']
        },
        'app': {
            exports: 'app',
            deps: ['bootstrap','css!../lib/css/iconfont.css','css!../lib/css/bootstrap.min.css','css!../build/main.css']
        }
    }
});
require(['app', './build/main.js','angular'], function (app) {
    app.init();
})












