/**
 *
 */
window.LOCALE = localStorage.getItem('DOCS_LANGUAGE') || 'zepto';
define([`text!../../docs/${LOCALE}/alert.md`], function (document) {
  return document;
});


