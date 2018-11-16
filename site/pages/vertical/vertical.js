/**
 *
 */
window.LOCALE = localStorage.getItem('DOCS_LANGUAGE') || 'zepto';

define([`text!../../docs/${LOCALE}/vertical.md`], function (document) {
  return document;
});


