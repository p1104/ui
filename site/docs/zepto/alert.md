# alert 

alert 提示、二次确认

## 样式说明
- 组件库 共用一套样式文件。
> 各技术栈实现 共用样式，交互文件不一样而已。但是交互 接口文档需要保持一致！减少迁移和学习成本！

- zepto/jquery 版只提供样式。 dom 模板结构需要自己维护。所以 API 文档和 demos 都只是提供一个 dom 结构参考！
> 具体业务使用中 可以调整 dom 结构。

- reactJs/vueJs 版 通过 props 内部维护 dom 模板结构。
> dom 嵌套 可以通过 children（reactJs）或者 slot(vueJs) 实现！

