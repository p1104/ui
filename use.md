## use
> **npm run cup**:命令生产 需要的样式文件包（dist 文件夹）。 

> copy dist 样式文件包（建议放置到项目src的最外层目录下 :less）。

> 组件基于750设计稿开发。如果项目中比例不对。可以修改src/vari.less 中 @default-ratio 值。 then 重新运行 npm run build

## zepto/jquery 项目参考目录结构
```file

┌root/
├── docs/
├── test/
├── src/ 
│   └── common/
│   └── less/ (推荐放置到src根目录下) 
│   └── pages/  your pages 
│   └── styles/  style of pages
│   └── js/   js of pages
│   └── images/ 
│   └── services/
│   └── modules/
│   └── others folders/ ...
│
│
├── others folders/ ...
├── eslintrc.js
├── gulpfile.js
├── package.json
├── others files...

```
### demos
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=11; IE=10; IE=9; IE=8; IE=EDGE">
  <meta name="format-detection" content="telephone=no">
  <title>loading</title>
  <script type="text/javascript" src="../../common/resize.js"></script>
<!--组件样式 : 具体路劲看项目路劲-->
  <link rel="stylesheet" type="text/css" href="../../less/export_all.css"/>
    <!--项目共用样式-->
  <link rel="stylesheet" type="text/css" href="../../common/common.css"/>
  <!--页面自实现样式 yourPage style-->
  <link rel="stylesheet" type="text/css" href="loading.css"/>

</head>
<body>
<!--推荐统一 pre-page ，page-yourPageName -->
<div class="pre-page page-demo" id="page-demo">
<!-- 
class="pre-couponent component-atrr attr"
eg:pre-button button-large active disable
 -->
  <div class="pre-header">
    <span class="back iconfont icon-common_arrow_left_la" onclick="javascript:history.back();"></span>
    <p class="text">loading</p>
    <span class="set"></span>
  </div>


  <div class="parentDom" id="parentDom">
    <div class="pre-loading" target="parentDom">
      <div class="loading loading-gif">
        <img class="loading-circle" src="./loading_circle.gif">
        <p class="msg">block loading</p>
      </div>
    </div>
  </div>



</div>
<script src="../../common/zepto.js" type="text/javascript"></script>
<script src="../../other.js" type="text/javascript"></script>
<script type="text/javascript">

  $(function () {
    (function () {
      setTimeout(() => {
        $('#fullLoading').hide();
      }, 3000)
    })()

  });

</script>
</body>
</html>

```

## react/vue 项目参考目录结构
```file

┌root/
├── docs/
├── test/
├── src/ 
│   └── common/
│   └── less/ (推荐放置到src根目录下) 
│   └── pages/
│   └── images/
│   └── services/
│   └── modules/
│   └── store/
│   └── routes/
│   └── others folders/ ...
│   └── app.js
│
├── webpack/
│
├── others folders/ ...
├── eslintrc.js
├── webpack.config.js
├── package.json
├── others files...

```


### demos
- src/common/common.less

```less
//在项目的共用样式中 **@import "../less/export";** 。最后调用需要使用的组件函数。
@import "../less/export";

// your project common styles
body, #root, .react-content, .pre-page {
  min-height: 100%;
  width: 100%;
  background-color: @default-bgColor;
  font-size: @default-fSize;
  word-break: break-all;

}

.color-333 {
  color: @default-color-333;
}

.color-666 {
  color: @default-color-666;
}

.color-999 {
  color: @default-color-999;
}

.color-15 {
  color: @default-color-15;
}

//call what you wants
.pre-header {
  .pre-header();
}

.pre-list {
  .pre-list();
}

.pre-ellipsis {
  .pre-ellipsis();
}

.pre-ellipsis2 {
  .pre-ellipsis(2);
}

.pre-ellipsis3 {
  .pre-ellipsis(3);
}

.pre-input {
  .pre-input();
}

.pre-button {
  .pre-button();
}

.pre-checkbox {
  .pre-checkbox();
}

.pre-textarea {
  .pre-textarea();
}

.pre-switch {
  .pre-switch();
}

.pre-vertical-center {
  .pre-vertical(center);
}

.pre-vertical-top {
  .pre-vertical(top);
}

.pre-vertical-bottom {
  .pre-vertical(bottom);
}

.pre-vertical-right {
  .pre-vertical(right);
}

.pre-vertical-left {
  .pre-vertical(left);
}

.pre-border {
  .pre-border(border);
}

.pre-border-top {
  .pre-border(border-top);
}

.pre-border-right {
  .pre-border(border-right);
}

.pre-border-bottom {
  .pre-border(border-bottom);
}

.pre-border-left {
  .pre-border(border-left);
}


```