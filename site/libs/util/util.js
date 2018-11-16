/**
 * Created by xiaogang on 2018/8/6.
 *
 */
"use strict";

window.util = window.util || {};
(function () {
  //this 指针的存储
  var _this = this;

  this.isFunction = $.isFunction;
  this.isArray = $.isArray;
  this.extend = $.extend;

  /**
   * 检测js文件
   * @param filePath
   * @returns {boolean}
   */
  this.existJs = function (filePath) {
    //filePath 的相对路径处理
    filePath = filePath.replace(/^((\.)+\/)+/ig, "")
    var _flag = false, _links = document.getElementsByTagName("script");
    for (var i = 0; i < _links.length; i++) {
      console.log(_flag);
      if (_links[i].src.indexOf(filePath) > -1) {
        _flag = true;
        break;
      }
    }
    return _flag;
  };
  /**
   * 检测css文件
   * @param filePath
   * @returns {boolean}
   */
  this.existCss = function (filePath) {
    filePath = filePath.replace(/^((\.)+\/)+/ig, "")
    var _flag = false, _links = document.getElementsByTagName("link");
    for (var i = 0; i < _links.length; i++) {
      console.log(_flag);
      if (_links[i].href.indexOf(filePath) > -1) {
        _flag = true;
        break;
      }
    }
    return _flag;
  };
  /**
   * 检测页面是否引用了相关文件
   * @param fileName
   */
  this.hasFile = function (filePath) {
    var fileType = filePath.substring(filePath.lastIndexOf(".") + 1).toLowerCase();
    if (/^js/i.test(fileType)) {
      return this.existJs(filePath);
    } else if (/^css/i.test(fileType)) {
      return this.existCss(filePath);
    }
  }

  /** 动态加载js文件以及css文件
   * @param  {fileName} 文件名 String or Array 建议最好使用绝对路径
   * @param  {charset}  文件编码
   * @param  {callback(code)} 文件加载完成回调函数 code[success,error]
   * @demo
   */
  this.loadJsCssFile = function (params) {
    var dp = {
      fileName: null,//array in fileName[{fileName:'',media:'',charset:'',ftype:''}]
      charset: null,
      media: null,
      ftype: null,
      attributes: [],
      callback: function (code) {
      }
    }, _index = -1;

    this.extend(dp, params);

    function loadFile(fileName, charset, media, callback, ftype, attributes) {
      var fileref, src = fileName, filetype, checkFile = true;
      //数组格式加载文件时通过对象格式传递参数
      if (typeof fileName === 'object') {
        charset = fileName.charset || charset;
        media = fileName.media || media;
        src = fileName.fileName;
        ftype = fileName.ftype;
        attributes = fileName.attributes || attributes;
        checkFile = typeof fileName.checkFile === 'boolean' ? fileName.checkFile : true;
      }
      //获取文件路径字符串
      filetype = src;
      if (!filetype) {
        _this.isFunction(callback) && callback('success');
        return;
      } else {
        if (_this.hasFile(filetype)) {
          return _this.isFunction(callback) && callback('success');
        }
      }
      //截取文件类型
      filetype = filetype.substring(filetype.lastIndexOf(".") + 1).toLowerCase();
      filetype = ftype || filetype;

      //createElement
      if (/^js/i.test(filetype)) {
        fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", src);
      } else if (/^css/i.test(filetype)) {
        fileref = document.createElement('link');
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", src);
      }
      else {//如果非此两种文件
        _this.isFunction(callback) && callback('error');
      }

      //event and callback bind
      if (typeof fileref !== "undefined") {
        //设置charset、media和其他自定义的属性attributes
        charset && fileref.setAttribute("charset", charset);
        media && fileref.setAttribute("media", media);
        if (attributes && attributes.length) {
          attributes.forEach(function (o) {
            fileref.setAttribute(o.key, o.value);
          });
        }
        if (filetype === "css")//css 的onload不兼容所有浏览器
        {
          _this.isFunction(callback) && callback('success');
        }
        else {

          fileref.onload = fileref.onreadystatechange = function () {
            if (!this.readyState ||
              this.readyState === 'loaded' ||
              this.readyState === 'complete') {
              _this.isFunction(callback) && callback('success');
            }
          };
        }
        fileref.onerror = function () {
          _this.isFunction(callback) && callback('error');
        };
        document.getElementsByTagName("head")[0].appendChild(fileref);
      }
    }

    function iterateFiles(status) {
      //加载失败 直接返回失败回调
      if (status === "error") {
        dp.callback('error');
        return;
      }
      //加载完成 返回成功回调
      if (++_index >= dp.fileName.length) {
        dp.callback('success');
        return;
      }
      loadFile(dp.fileName[_index], dp.charset, dp.media, iterateFiles, dp.ftype, dp.attributes);
    }

    if (this.isArray(dp.fileName)) {
      // (function (status) {
      //     if (status === "error") {
      //         dp.callback('error');
      //         return;
      //     }
      //     _index++;
      //     if (_index >= dp.fileName.length) {
      //         dp.callback('success');
      //         return;
      //     }
      //     loadFile(dp.fileName[_index], dp.charset, dp.media, arguments.callee, dp.ftype, dp.attributes);
      // })();
      iterateFiles();
    }
    else {
      loadFile(dp.fileName, dp.charset, dp.media, dp.callback, dp.ftype, dp.attributes);
    }
  };
}).call(util);
