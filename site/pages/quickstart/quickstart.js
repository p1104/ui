/**
 *
 */
window.LOCALE = localStorage.getItem('DOCS_LANGUAGE') || 'zepto';
define([`text!../../docs/${LOCALE}/quickstart.md`], function (document) {
  return document;
});


