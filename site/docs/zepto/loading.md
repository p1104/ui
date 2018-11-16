## Loading 加载

数据加载时显示动效

### 样式说明
- 组件库 共用一套样式文件。
> 各技术栈实现 共用样式，交互文件不一样而已。但是交互 接口文档需要保持一致！减少迁移和学习成本！

- zepto/jquery 版只提供样式。 dom 模板结构需要自己维护。所以 API 文档和 demos 都只是提供一个 dom 结构参考！
> 具体业务使用中 可以调整 dom 结构。

- reactJs/vueJs 版 通过 props 内部维护 dom 模板结构。
> dom 嵌套 可以通过 children（reactJs）或者 slot(vueJs) 实现！

### 实现细节
- full 说明
```less
  //full:false 时  父元素 height : 3.3rem (默认高度！) 具体业务中调整（loading组件可以实现自适应居中！）
  
  //core style 
  .pre-loading{
      position: relative;
      height: 100%;//自适应居中！
      min-height: 3.3rem;//默认高度！
      
      .loading-mask {
         //full=true
         position: fixed;
          //full=false
          &[full=false] {
           position: absolute;
          }
      }
  }
```

### zepto/jquery API
- 以下是推荐 dom 结构


#### 区域加载 不带文案

::: demo full='false' 控制区域加载 
```html
    <div class="pre-loading" full="false">
       <div class="loading-mask">
         <div class="loading loading-gif">
           <span class="gif loading-type"></span>
         </div>
       </div>
     </div>
```
:::

#### 区域加载 带文案

::: demo full='false' 控制区域加载 msg : 设置文案！。
```html
    <div class="pre-loading" full="false">
        <div class="loading-mask">
          <div class="loading loading-gif">
            <!--<img class="loading-circle" src="./loading_circle.gif">-->
            <span class="gif loading-type"></span>
            <p class="msg">block loading</p>
          </div>
        </div>
      </div>
```
:::

#### 区域加载 svg loading

::: demo full='false' 控制区域加载 
```html
     <div class="pre-loading" full="false">
         <div class="loading-mask">
           <div class="loading loading-svg">
             <svg viewBox="25 25 50 50" class="loading-type">
               <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
             </svg>
             <p class="msg">svg loading</p>
           </div>
         </div>
       </div>
```
:::

#### 全局加载 不带文案

::: demo full='true' 控制全局加载 
```html
    <div class="pre-vertical-center" id="btn">整页加载，3 秒后消失</div>
    <style type="text/css">
        #btn{
           width: 80%;
        }
    </style>
    <script type="text/javascript">
        $('#btn').click(function() {
            modules.ui.loading({
                full:true,
                msg:'full msg',
                type:'gif' 
            });
           
            setTimeout(()=> {
               modules.ui.hideLoading();
            },3000);
        });
    </script>
```
:::

### reactJs/vueJs API


#### props
| 参数       |类型            | 默认值       | 可选值           |说明              
|----------  |--------------  |----------    |----------------  |----------------  
| type       |string          |gif           |  gif / svg       | loading 类型    
| msg        | string         | -            | -                |自定义加载文案             
| full       | bool           | false        | -                | 是否全局展示


