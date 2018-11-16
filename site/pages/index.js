/**
 * Created by xiaogang on 2018/7/31.
 *
 */
"use strict";


define({
  Document: {
    Quickstart: 'Quickstart',
  },
  Components: {
    'Css Component': {
      List: 'List',
      Ellipsis: 'Ellipsis',
      Vertical: 'Vertical',
      Border: 'Border'
    },
    'Js Component': {
      'Alert': 'alert',
      'Loading': 'loading'
    },
    'Form component': {},
    'Test': {
      Transition: 'Transition'
    }
  },
  //不展示 demos 的文档
  pages: ['quickstart', 'transition'],
  more: {
    pre_ui_react: `${location.origin}/pre_ui_react/master/index.html`,
  }
});


// for commonJs
// export default {
//
// }
