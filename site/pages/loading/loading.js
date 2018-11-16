/**
 *
 */
window.LOCALE = localStorage.getItem('DOCS_LANGUAGE') || 'zepto';
util.loadJsCssFile({
  fileName: ['./pages/loading/loading.css']
});
define([`text!../../docs/${LOCALE}/loading.md`], function (document) {
  return document;
});


