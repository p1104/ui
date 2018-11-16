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
    developer_webs: `${location.origin}/cup_developer/dev/site/page.html`,
    cup_ui_react: `${location.origin}/cup_ui_react/master/index.html`,
    modules_cmd: `${location.origin}/cup_plugins/dev/site/page.html?mode=cmd`,
    modules_zepto: `${location.origin}/cup_plugins/dev/site/page.html?mode=zepto`,
    modules_amd: `${location.origin}/cup_plugins/dev/site/page.html?mode=amd`,
  }
});


// for commonJs
// export default {
//
// }
