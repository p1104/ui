/**
 * Created by xiaogang on 2018/8/6.
 *
 */
"use strict";
//'../libs/codemirror/keymap/sublime.js','../libs/codemirror/mode/htmlmixed/htmlmixed.js'
util.loadJsCssFile({
  fileName: ['./style/editor.css']
});
define(['CodeMirror','CodeMirror/mode/xml/xml','CodeMirror/mode/javascript/javascript','CodeMirror/mode/htmlmixed/htmlmixed'], function (CodeMirror) {

  return function (id, code) {
    //editor
    let cm = CodeMirror(document.getElementById(`code_${id}`), {
      mode: 'htmlmixed',
      // theme: 'default',
      // keyMap: 'sublime',
      // viewportMargin: Infinity,
      lineNumbers: false,
      dragDrop: false,
      value: code
    });

    cm.on('changes', cm => {
      $(`#render_${id}`).html(cm.getValue());
    });
  }

});
