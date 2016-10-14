require.config({
	//基础目录
	baseUrl:"org",
	//模块文件
	paths:{
		"css":"js/css.min",
        "jquery": "js/jquery.min",
        "bootstrap":"js/bootstrap.min",
        "angular":"js/angular.min",
        "moment":"js/moment-with-locales.min",
        "datepicker":"js/bootstrap-datetimepicker.min"
	},
	shim:{
		 "bootstrap":{
            //别名
            exports: '$',
            //依赖文件
            deps: ['jquery','css!../org/css/bootstrap.min.css']
        },
        "angular":{
            //别名
            exports: '$',
            //依赖文件
            deps: ['jquery']
        },
        "datepicker":{

            //依赖文件
            deps: ['moment','css!../org/css/bootstrap-datetimepicker.min.css']
        }
	}
});