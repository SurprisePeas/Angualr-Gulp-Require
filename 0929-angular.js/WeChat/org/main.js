require.config({
    //基础目录
    baseUrl: "org/js",
    //模块文件
    paths: {
        "css": "css.min",
        "jquery": "jquery.min",
        "angular": "angular.min",
        "bootstrap": "bootstrap.min",
        "underscore":"underscore-min"
    },
    shim: {
    	'underscore': {
            //别名
            exports: '_'
        },
        'angular': {
            //别名
            exports: '$',
            //依赖文件
            deps: ['jquery']
        },
        'bootstrap': {
            //别名
            exports: '$',
            //依赖文件
            deps: ['jquery','css!../css/bootstrap.min.css','css!../css/font-awesome.min.css']
        }
    }
});