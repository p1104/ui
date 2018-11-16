## ellipsis 

超出 省略号 样式

### 样式说明
- 组件库 共用一套样式文件。
> 各技术栈实现 共用样式，交互文件不一样而已。但是交互 接口文档需要保持一致！减少迁移和学习成本！

- zepto/jquery 版只提供样式。 dom 模板结构需要自己维护。所以 API 文档和 demos 都只是提供一个 dom 结构参考！
> 具体业务使用中 可以调整 dom 结构。

- reactJs/vueJs 版 通过 props 内部维护 dom 模板结构。
> dom 嵌套 可以通过 children（reactJs）或者 slot(vueJs) 实现！


### zepto/jquery API
- 以下是推荐 dom 结构


#### 单行

::: demo  pre-ellipsis 控制单行！
```html
      <div class="pre-ellipsis">
          [English] code-prettify is An embeddable script that makes source-code snippets in HTML prettier.
      </div>
      
      <div class="pre-ellipsis">
          [中文] 作为 CSS 的一种扩展，Less 不仅完全兼容 CSS 语法，而且连新增的特性也是使用 CSS 语法。这样的设计使得学习 Less 很轻松，而且你可以在任何时候回退到 CSS。
      </div>
```
:::

#### 双行

::: demo  pre-ellipsis2 控制 双行！
```html
      <div class="pre-ellipsis2">
          [double line] code-prettify is An embeddable script that makes source-code snippets in HTML prettier.
      </div>
```
:::

#### 三行

::: demo  pre-ellipsis3 控制 三行！
```html
      <div class="pre-ellipsis3">
          [中文] 作为 CSS 的一种扩展，Less 不仅完全兼容 CSS 语法，而且连新增的特性也是使用 CSS 语法。这样的设计使得学习 Less 很轻松，而且你可以在任何时候回退到 CSS。
      </div>
```
:::