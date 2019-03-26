var gulp = require('gulp');

// 一个普通任务
gulp.task('say', function () {
    console.log(123);
});


gulp.task('copy', () => {
    // gulp.src相当于一个文件指针，指向这个file，
    // 使用pipe类似于管道流，gulp.dest()指向目标文件
    // 意思是将index.html复制到dist目录下[覆盖式复制]
    gulp.src('./src/index.html').pipe(gulp.dest('./dist/'));
});


gulp.task('reload', () => {
    // watch监视一个文件，并且在文件进行改动的时候做一些事情
    gulp.watch('./src/index.html', gulp.parallel('copy','reload'));
});