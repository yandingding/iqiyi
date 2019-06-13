const  gulp=require('gulp');//引入gulp模块
const  html=require('gulp-minify-html');
const  css=require('gulp-minify-css');

// gulp.task('default',function(){
//     console.log('hello word')
// });
// gulp.task('copyfile',function(){
//     return gulp.src('src/index.html').pipe(gulp.dest('dist/'));
// })
// gulp.task('htmlfile',function(){
//     return gulp.src('src/index.html')//引入文件
//     .pipe(html())//压缩
//     .pipe(gulp.dest('dist/'))//输出
// });
gulp.task('cssfile',function(){
    return gulp.src('src/css/main.css')//引入文件
    .pipe(css())//压缩
    .pipe(gulp.dest('dist/css/'))//输出
});