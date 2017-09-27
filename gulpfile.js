var gulp = require('gulp');  // 將 node_modules 的檔案載入
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('sass', function () {
  var processors = [                                 // 定義 postCSS 所需要的元件
      autoprefixer({browsers: ['last 10 version']})   // 使用 autoprefixer，這邊定義最新的五個版本瀏覽器
  ];
  return gulp.src('./*.scss')
    .pipe(sass(
      {outputStyle: 'expanded'}
    ).on('error', function(error) {
        console.log(error.toString())
        this.emit('end')
    }))
    .pipe(postcss(processors))                       // 將 PostCSS 插入流程
    .pipe(gulp.dest('C:/project/web/mall.shop123.com.tw/images_pro/share_utf8/css/'));
});


gulp.task('sass:watch', function () {
  gulp.watch('./*.scss', ['sass']); 
  // 監控資料夾，當有變化時執行 'sass' 任務
});