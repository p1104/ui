/**
 *
 */
window.LOCALE = localStorage.getItem('DOCS_LANGUAGE') || 'zepto';
util.loadJsCssFile({
  fileName: ['./pages/border/border.css']
});
define([`text!../../docs/${LOCALE}/border.md`], function (document) {
  return document;
});


