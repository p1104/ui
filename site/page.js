/**
 * Created by xiaogang on 2018/7/31.
 *
 */
"use strict";

/**
 * init page
 */
$(function () {
  libCss();
  renderMd();
  navRender();
  demos();
});

/**
 *
 * @returns {string}
 */
function getHash(hash) {
  let _hash = hash || location.hash.replace('#/', '') || 'quickstart';
  return _hash.toLowerCase();
}

/**
 * hashchange
 */
window.addEventListener("hashchange", () => {
  window.scrollTo(0, 0);
  console.log(location);
  renderMd();
  demos();
}, false);

/**
 * 获取md 文档 并 转化为 html
 * @param hash
 */
function renderMd(hash) {
  let components = {};
  let _hash = getHash(hash);
  let _pagePath = `./pages/${_hash}/${_hash}.js`;

  //'./libs/markdown/markdown-it.js'
  require([_pagePath, './libs/markdown/markdown-it.js', './libs/editor/render.js', './libs/editor/editor.js'], function (pageDoc, markdown, render, editor) {
    let md = markdown({
      langPrefix: 'language-',
      html: true,
    });
    //todo
    let _pageDoc = pageDoc.replace(/:::\s?demo\s?([^]+?):::/g, (match, $1, offset) => {

      const _id = offset.toString(36);
      components[_id] = render($1, _hash, _id);

      return `<div id=${_id}></div>`;
    });
    // console.log(_pageDoc);


    let result = md.render(_pageDoc);
    $('#page').html(result);

    //todo
    for (let id in components) {

      $(`#${id}`).html(components[id].dom);

      editor(id, components[id].code);
    }
    highlight();
    // code_toggle_display();
    code_toggle_transition();
  });
}

function code_toggle_display() {
  $('#page').find('.code_block').hide();

  $('#page').off().on('click', '.code_toggle', function (e) {

    if ($(this).prev('.code_block').toggle().css('display') == 'none') {
      $(this).text('编辑代码');
    } else {
      $(this).text('隐藏代码');
    }
  });
}

function code_toggle_transition() {
  $('#page').find('.code_block').addClass('pre-transition max-height');

  $('#page').off().on('click', '.code_toggle', function (e) {
    if ($(this).prev('.code_block').toggleClass('open').css('max-height') == '0px') {
      setTimeout(() => {
        $(this).text('隐藏代码');
      }, 500);
    } else {
      setTimeout(() => {
        $(this).text('编辑代码');
      }, 500);
    }

    console.log($(this).prev('.code_block').css('max-height'));
  });
}

/**
 * 样式库
 */
function libCss() {
  //<!--<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">-->
  util.loadJsCssFile({
    fileName: ['./libs/codemirror/lib/codemirror.css', './libs/highlight/styles/default.css']
  })
}

function highlight() {
  /**
   *   todo : hljs: './libs/highlight/highlight.js' 报错 （具体情况不清楚！）
   *    highlight:'./libs/highlight/highlight.min', //requireJs 中main.path 配置
   */
  require(['highlight'], function (hljs) {
    //不支持 less 高亮。凑合着用 css 语法
    hljs.registerLanguage('less', function () {
      return hljs.getLanguage('css');
    });
    hljs.initHighlightingOnLoad();

    $('pre code').each(function (i, block) {
      hljs.highlightBlock(block);
    });
  });

}

function demos(hash) {
  require(['./pages/index.js'], function (pages) {
    let _hash = getHash(hash);
    let _url = _hash && pages.pages.indexOf(_hash) < 0 ? `../demos/pages/${_hash}/${_hash}.html` : '../demos/index.html';
    $('iframe').attr('src', _url);
  });

}

/**
 * nav
 */
function navRender() {
  let _hash = getHash() || 'quickstart';
  /**
   * dom render
   */
  require(['./pages/index.js'], function (pages) {
    console.log(pages);
    let _navDom = '';
    for (let key in pages) {
      if (pages[key] instanceof Array) {
        continue;
      }
      _navDom += `<a class="component_parent">${key}</a>`;
      let _itemDom = '';
      for (let item in pages[key]) {
        let _value = pages[key][item];
        if (typeof _value == "string") {

          if (/https?/.test(_value)) {
            _itemDom += `<li class="nav-item"><a class="item" target="_blank" href="${_value}" class="">${item}</a></li>`
          } else {
            _itemDom += `<li class="nav-item"><a class="item" href="#/${item}" class="">${item}</a></li>`
          }

        } else {
          //components
          _itemDom += `<div class="component_group">`;
          _itemDom += `<a class="component_name">${item}</a>`;
          _itemDom += `<ul>`;
          for (let com in pages[key][item]) {
            _itemDom += `<li class="nav-item"><a class="item" href="#/${com}" class="">${com}</a></li>`
          }
          _itemDom += `</ul>`;
          _itemDom += `</div>`;
        }

      }
      if (_itemDom.indexOf('<li') === 0) {
        _itemDom = ['<ul>', _itemDom, '</ul>'].join('');
      }
      _navDom += _itemDom;
    }

    $('#nav').html(_navDom);
    _nav_item_active();
  });

  /**
   * events
   */
  $('#nav').on('click', 'a.item', function (e) {
    $('#nav').find('a.item').removeClass('active');
    $(this).addClass('active');
  });

  /**
   *
   * @private
   */
  function _nav_item_active() {
    $('#nav').find('.item').each(function (index, item) {
      console.log($(item).text());
      if ($(item).text() && $(item).text().toLowerCase() === _hash) {
        $(item).addClass('active');
        return false;
      }
    });
  }

  /**
   *
   * @private
   */
  function _nav_item_active2(item) {
    return item.toLowerCase() === _hash ? 'active' : '';
  }

};

//docs
$(function () {
  $('#switch').click(function (e) {
    e.stopPropagation();
    //
    $('#demos').toggleClass('switch_demos');
    $('#page').toggleClass('switch_demos');
    $('#nav').toggleClass('switch_demos');

  });

  $('#mobile_demos').click(function (e) {

  });

  $("#mobile_nav").click(function (e) {
    e.stopPropagation();
    $('#nav').addClass('open');
  });
  $('body').click(function (e) {
    $('#nav').removeClass('open');
  })
});

/**
 * serviceWorker 注册
 */
if (navigator.serviceWorker) {
  //@formatter:off
  navigator.serviceWorker
    .register('./sw.js')
    .then(registration => {
      // sometime later…
      registration.update();
      console.log(registration)
    });
} else {
  console.log('你的浏览器 不支持 serviceWorker！\n 可以升级使用最新版的chrome浏览器！');
}
