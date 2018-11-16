/**
 * Created by xiaogang on 2018/8/6.
 *
 */
"use strict";
util.loadJsCssFile({
  fileName: ['./style/render.css']
});
define([], function () {

  return function (demo, hash, id) {
    let playerId = `${parseInt(Math.random() * 1e9).toString(36)}`
    let _document = demo.match(/([^]*)\n?(```[^]+```)/);
    // this.description = marked(_document[1])
    let _code = _document[2].match(/```(.*)\n?([^]+)```/)[2]

    console.log(_document);
    console.log(_code);

    return {
      dom: `<div class="demo-block demos-${hash}">
        <div class="render" id="render_${id}">${_code}</div>  
        <div class="code_block" id="code_${id}">
            
        </div>
        <div class="code_toggle">编辑代码</div>
      </div>`,
      code: _code
    }
  }


});
