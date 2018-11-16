/**
 * Created by xiaogang on 2018/7/31.
 *
 */
"use strict";

require.config({
  waitSeconds: 0,
  baseUrl: '',// site
  paths: {
    text: "./libs/requireJs/text",
    markdownIt: './libs/markdown',
    highlight: './libs/highlight/highlight.min'
  },
  packages: [{
    name: "CodeMirror",
    location: "./libs/codemirror/",  //or libs/codemirror  & not  /libs/codemirror[绝对地址了]
    main: "./lib/codemirror"
  }],
  shim: {
    'cm_mode_htmlmixed': {
      deps: ['codemirror', 'cm_mode_xml', 'cm_mode_javascript']
    }
  }
});
