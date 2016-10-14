require.config({
//基础⽬目录
    baseUrl: "resource",
//模块⽂文件
    paths: {
        "css": "js/css.min",
        "jquery": "js/jquery.min",
        "bootstrap": "js/bootstrap.min",
        "util": "app/util",
        //编辑器
        "kindeditor": "component/kindeditor/lang/zh_Cn",
        "kindeditor.main": "component/kindeditor/kindeditor-all-min",
    },
    shim: {
        'bootstrap': {
            //别名
            exports: '$',
            //依赖⽂文件
            deps: ['jquery',
                'css!../resource/css/bootstrap.min.css']
        },
        'kindeditor': {
            //依赖文件
            deps: ['kindeditor.main',
                'css!../resource/component/kindeditor/themes/default/default.css']
        },
    }
});