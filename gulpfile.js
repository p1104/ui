/**
 * Created by xiaogang on 2018/7/10.
 *
 */
"use strict";

"use strict";
const gulp = require('gulp');
const Clean = require('gulp-clean');
const cssBase64 = require('gulp-css-base64');
const Less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
const replace = require('gulp-replace');


//先清空 打包目录 和临时目录
gulp.task('dist_clean', function () {
  console.log("dist_clean");
  return gulp.src(['./dist'], {read: false})
    .pipe(Clean({force: true}));
});

//copy less
gulp.task('src_copy_less', ['dist_clean'], function () {
  console.log("src_copy  !./src/export_all.less");

  gulp.src(['./src/**/**.less', '!./src/export_all.less'])
    .pipe(gulp.dest('./dist/less'));

  gulp.src(['./src/img/**'])
    .pipe(gulp.dest('./dist/less/img'));

  return gulp.src(['./src/iconfont/**'])
    .pipe(gulp.dest('./dist/less/iconfont'));
});

//copy css
gulp.task('src_copy_css', ['dist_clean'], function () {
  console.log("src_copy  !./src/export_all.less");
  //
  // gulp.src(['./src/**/**.less', '!./src/export_all.less'])
  //   .pipe(gulp.dest('./dist/'));

  //todo : 所有图片内联处。
  // gulp.src(['./src/img/**'])
  //   .pipe(gulp.dest('./dist/css/img'));

  return gulp.src(['./src/iconfont/**'])
    .pipe(gulp.dest('./dist/css/iconfont'));
});


//less to css
gulp.task('src_less_to_css', ['dist_clean'], function () {
  console.log("src_less_to_css");

  return gulp.src(['./src/export_all.less'])
    .pipe(Less({
      plugins: [autoprefix]
    }))
    .pipe(replace(/box-orient/g, function (match) {
      //todo : fixed : Replaces instances of "-box-orient" with "-webkit-box-orient"
      return `-webkit-${match}`;
    }))
    .pipe(cssBase64({
      baseDir: "./components/",
      maxWeightResource: 32768 * 1024,
      extensionsAllowed: ['.gif', '.jpg', '.png']
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'));
});


//demos clean
gulp.task('demo_clean', ['build'], function () {
  console.log("clean css");

  gulp.src(['./demos/common/common.css'], {read: false})
    .pipe(Clean({force: true}))

  return gulp.src(['./demos/style/**.css'], {read: false})
    .pipe(Clean({force: true}))
});
//demos
gulp.task('demos_style', ['demo_clean'], function () {
  console.log("less to css");

  gulp.src(['./demos/common/common.less'])
    .pipe(Less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./demos/common'));

  return gulp.src(['./demos/style/**.less'])
    .pipe(Less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./demos/style'));
});


//site clean
gulp.task('site_clean', ['demos'], function () {
  console.log("clean css");

  return gulp.src(['./site/style/**.css'], {read: false})
    .pipe(Clean({force: true}))
});

//site style
gulp.task('site_style', ['site_clean'], function () {
  console.log("less to css");

  return gulp.src(['./site/**/**.less', '!./site/style/md.less', '!./site/style/common/**.less', '!./site/libs/**/**.less'])
    .pipe(Less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./site'));
});

//
gulp.task("default", ['dist_clean', 'src_copy_less', 'src_copy_css', 'src_less_to_css'], function () {
  console.log("gulp default finished");
});

//
gulp.task("build", ['default'], function () {
  console.log("gulp build finished");
});

//
gulp.task("demos", ['demos_style'], function () {
  console.log("gulp demos finished");
});


gulp.task("site", ['site_style'], function () {
  console.log("gulp site finished");
});

