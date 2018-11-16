/**
 *
 */
window.LOCALE = localStorage.getItem('DOCS_LANGUAGE') || 'zepto';
define([`text!../../docs/${LOCALE}/list.md`], function (document) {
  return document;
});


