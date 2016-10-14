// 定义依赖项
var gulp = require('gulp'),
// 定义压缩js的插件
minjs = require('gulp-uglify'),
// 定义压缩css的插件
mincss = require('gulp-minify-css'),
// 定义合并插件
concat = require('gulp-concat'),
// 定义检查js代码的插件
jshint = require('gulp-jshint'),
// 定义重命名插件
rename = require('gulp-rename'),
// 定义刷新页面的插件
connect = require('gulp-connect'),
// 定义编译less的插件
less = require('gulp-less');

// 定义一个名字为js的任
gulp.task('hd',function(){
	// 找到我们要操作的文件
	gulp.src('js/*.js')
	// 执行合并插件给合并完成的文件起一个名字
	.pipe(concat('max.js'))
	// 执行压缩插件
	.pipe(minjs())
	// 执行重命名插件名字为.hd
	.pipe(rename({suffix:'.hd'}))

	// 监听js代码(监听代码)
	.pipe(connect.reload())

	// 把我执行完以上操作的文件放到js1/js文件夹内
	.pipe(gulp.dest('js1/js'));
})

gulp.task('css',function(){
	gulp.src('css/*.css')

	.pipe(concat('max.css'))
	.pipe(mincss())
	.pipe(rename({suffix:'.hd'}))

	.pipe(connect.reload())

	.pipe(gulp.dest('css1'));



})

gulp.task('less',function(){
	gulp.src('src/**/*.less')
	.pipe(less())
			// 监听js代码(监听代码)
	.pipe(connect.reload())
	.pipe(gulp.dest('build'));
})

gulp.task('jshint',function(){
	gulp.src('js/hd.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
})


gulp.task('watch',function(){
	gulp.watch('css/*.css',['css']);
	gulp.watch('js/*.js',['hd']);
	gulp.watch('src/less/*.less',['less']);
})

gulp.task('connect',function(){
	// 连接服务器，我们用它来连接我们的浏览器
	connect.server({
		// 开启这个服务，并随时监听代码的变化反馈给浏览器
		livereload:true
	})
})


gulp.task('default',['watch','connect']);