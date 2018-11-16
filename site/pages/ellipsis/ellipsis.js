/**
 *
 */
window.LOCALE = localStorage.getItem('DOCS_LANGUAGE') || 'zepto';

define([`text!../../docs/${LOCALE}/ellipsis.md`], function (document) {
  return document;
});


