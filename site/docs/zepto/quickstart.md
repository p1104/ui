## 快速使用 

### 安装
使用 npm install pre-ui

```shell
npm i pre-ui --save-dev
``` 

### 使用
注意 ：pre-ui 只是一个 **纯样式**（pre-ui-react & pre-ui-vue 共用的样式库）

#### zepto/jquery
需要自己 参考组件文档 去构建dom 结构 匹配样式；以便于正确的渲染

```html
<head>
 <!-- 引入 ui 组件样式  -->
  <link type="text/css" rel="stylesheet" href="../dist/css/export_all.css"/>
</head>
<body>
   <!--demos 需要自己 参考组件文档 去构建dom 结构 匹配样式；以便于正确的渲染-->
   <div class="pre-loading" full="false">
      <div class="loading-mask">
        <div class="loading loading-gif">
          <img class="loading-circle" src="./loading_circle.gif">
        </div>
      </div>
    </div>
    
  <div class="pre-button active">
      active button
  </div>
  
  <input type="button" class="pre-button active" value="input button(active)">
</body>

```


#### reactJs/vueJs
参考组件文档 传递对应 组件的props  (组件自己根据 props 构建dom 结构 匹配样式；然后 正确的渲染)

```jsx harmony
import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Loading } from 'pre-ui-react';
//必须要有 组件样式 文件
import 'pre-ui';

ReactDOM.render(
  <div className="content">
      <Loading msg="loading msg" full="false"/>
      <Button type="primary" msg="button msg"/>
  </div>,
  document.getElementById('app'));

```

### 备注
> 暂时 npm 库没有准备好！ （可以 通过 copy 解决，不太影响开发！优先完善 **组件样式库** 和 **react交互组件库**文件）