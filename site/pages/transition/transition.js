/**
 * Created by xiaogang on 2018/8/17.
 *
 */
"use strict";
window.LOCALE = localStorage.getItem('DOCS_LANGUAGE') || 'zepto';

define([`text!../../docs/${LOCALE}/transition.md`], function (document) {
  return document;
});
