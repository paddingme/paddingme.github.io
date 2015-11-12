var gulp = require('gulp');

/**
 * 所有安装插件依赖
 */

var htmlmin = require('gulp-html-minifier'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    concat = require('gulp-concat'),
    revReplace = require('gulp-rev-replace'),
    useref = require('gulp-useref'),
    filter = require('gulp-filter'),
    csso = require('gulp-csso'),
    rimraf = require('rimraf'),
    merge = require('merge-stream'),
    browserSync = require('browser-sync'),
    ngAnnotate = require('gulp-ng-annotate');

/**
 * 所有资源路径
 */

var path = {
    homepage: ['src/index.html'],
    partials: ['src/partials/**/*.html'],
    css: ['src/css/**/*.css'],
    js: ['src/js/**/*.js'],
    img: ['src/img/**/*'],
    favicon: ['src/favicon.ico'],
    vendor:['src/vendor/**/*'],
    lost: ['src/404.html'],
    move: ['src/favicon.ico','src/vendor/**/*','src/404.html'],
    build: ['src/index.html','src/css/**/*.css','src/js/**/*.js']
}

/**
 * 压缩 各个模板html页面
 */

gulp.task('html', function() {
    return gulp.src(path.partials)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/partials/'))
})


/**
 * 压缩图片 默认只压缩 png 图片
 * 想要压缩其他图片格式 或者png压缩失真，请调整参数
 * 详见：https://github.com/sindresorhus/gulp-imagemin
 */

gulp.task('img',function(){
    return gulp.src(path.img)
            .pipe(imagemin())
            .pipe(gulp.dest('dist/images/'));
});


// 迁移所有未修改文件到dist目录下
// 如有其他文件请继续添加
gulp.task('move', function() {
    var vendor = gulp.src(path.vendor)
        .pipe(gulp.dest('dist/vendor'));
    var favicon = gulp.src(path.favicon)
        .pipe(gulp.dest('dist/'));
    var lost =  gulp.src(path.lost)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'));
    return merge(vendor,favicon,lost);
});



// 清空 dist 文件夹 
gulp.task('clean', function(cb) {
    rimraf('./dist', cb);
});

// 实时刷新浏览器，保存即刷新，再也不要 F5了！
 gulp.task('watch',function(){
    browserSync({
        files: '**',
        server: {
            baseDir: './dist/'
        }
    })
 })


gulp.task('build',['html','img','move'],function(){

    var cssFilter = filter('**/*.css',{restore:true});
    var jsFilter = filter('**/*.js',{restore:true});
    var userefAssets = useref.assets();
    return gulp.src(path.homepage)
        .pipe(userefAssets)  // 解析html中build:{type}块，将里面引用到的文件合并传过来
        .pipe(jsFilter)
        .pipe(ngAnnotate({add:true})) // 注意 在 angularjs 中有注入依赖的地方请加上 /* @ngInject */ 否则压缩会报错！
        .pipe(uglify())  // 压缩Js
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())  // 压缩Css
        .pipe(cssFilter.restore)
        .pipe(rev())   // 重命名文件
        .pipe(userefAssets.restore())
        .pipe(useref())
        .pipe(revReplace()) // 重写文件名到html
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
});


gulp.task('default',function(){

    gulp.run('build','watch');

// 如果 vendor、 favicon、404 变化 则 move
    gulp.watch(path.move,['move']);
// 如果图片增加或者改变则重新压缩打包到dist
    gulp.watch(path.img,['img']);
// 如果模板页变化则重新压缩打包
    gulp.watch(path.partials,['html']);
//  如果 index.html / CSS/ JS 变化则 重新build;
    gulp.watch(path.build,['build']);

})


/*
    //sourcemaps = require('gulp-sourcemaps'),
    // postcss = require('gulp-postcss'),
    // cssgrace = require('cssgrace'),
    // autoprefixer = require('autoprefixer'),
// 使用 autoprefixer 进行添加 前缀 
// 浏览器兼容除IE小于7的版本以外的所有浏览器的最新5个版本
//  css grace 对 IE 进行 hack 获取图片高度，position:center,clear:fix 智能清除浮动
// 使用 css nano 对进行css压缩
// 读取背景图片路径有bug 暂时放弃使用 https://github.com/cssdream/cssgrace/issues/38  css grace
gulp.task('autoprefixer', function() {
    var processors = [
        require('cssgrace')
    ];

    return gulp.src(path.css)
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer({
            browsers: ['last 5 versions', 'not ie < 7']
        })]))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest'));
});

*/



