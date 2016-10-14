/*
 * connect.reload() 修改就会刷新页面
 */
// 定义依赖项
var gulp = require('gulp'),
// 定义压缩js的插件
    minjs = require('gulp-uglify'),
// 定义压缩css的插件
    mincss = require('gulp-minify-css'),
    // babel = require('gulp-babel'),
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

//js编译任务
gulp.task('js', function () {
    // 找到我们要操作的文件
    gulp.src('source/**/*.js')
        //执行检测js的插件
        //.pipe(jshint())
        //对代码进行报错提示
        .pipe(jshint.reporter('default'))

        //执行合并插件给合并完成的文件起一个名字
        .pipe(concat('main.js'))
        //执行压缩插件
        .pipe(minjs())
        //监听更改
        .pipe(connect.reload())
        //把我执行完以上操作的文件放到build文件夹内
        .pipe(gulp.dest('build'));
});

//less编译任务
gulp.task('less', function () {
    //文件路径
    gulp.src('css/**/*.less')
        //执行编译less的插件
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(mincss())
        //监听更改
        .pipe(connect.reload())
        //将编译完成的文件放到build文件夹中
        .pipe(gulp.dest('build'));
})

gulp.task('html', function () {
    //监听更改(路径,		每次修改html都会刷新页面)
    gulp.src('**/*.html').pipe(connect.reload())
});

gulp.task('connect', function () {
    //连接服务器，也就是说用它来连接我们的浏览器
    connect.server({
        //开启这个服务，并随时监听代码的变化反馈给浏览器
        livereload: true
    });
});

//监听文件变动,刷新浏览器
gulp.task('watch', function () {
    gulp.watch(['./source/**/*.js', './app.js'], ['js']);
    gulp.watch(['./css/**/*.less'], ['less']);
    gulp.watch('./**/*.html', ['html']);
});

//默认执行任务
gulp.task('default', ['watch', 'connect']);
