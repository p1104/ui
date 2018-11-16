/**
 * Created by xiaogang on 2018/8/15.
 *
 */
"use strict";

window.modules = window.modules || {};
modules.ui = modules.ui || {};

/**
 * zepto/vueJs/reactJs 三端 对外提供 统一的 api 文档。
 * ui.loading(params)
 * ui.loading(params)
 * ui.toast(params)
 * ui.hideToast(params)
 * ui.alert(params)
 * ui.hieAlert(params)
 */
(function () {
  /**
   *
   * @param params={
   *      full:true,
   *      msg:'full loading',
   *      type:'svg'
   *  }
   */
  this.loading = function (params) {
    //预处理
    params.full = true;
    params.type = params.type || 'svg';
    params.msg = params.msg || '';

    //
    let _template =
      `<div class="pre-loading" full="${params.full}">
       <div class="loading-mask">
         <div class="loading loading-${params.type}">
           <span class="gif hide loading-type"></span>
           <svg viewBox="25 25 50 50" class="circular svg loading-type hide">
               <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
           </svg>
           <p class="msg hide">${params.msg}</p>
         </div>
       </div>
     </div>`;

    // console.log(_template);

    if (params.full) {
      if (!$('body').children('.pre-loading').length) {
        $('body').append(_template);
      }
      //
      let _loading = $('body').children('.pre-loading').show();
      //type : switch dom class & parent dom class
      _loading.find(`.${params.type}`).removeClass('hide').siblings('.loading-type').addClass('hide').parent('.loading').removeClass().addClass(`loading loading-${params.type}`);
      //msg
      if (params.msg) {
        _loading.find(`.msg`).removeClass('hide').text(params.msg);
      } else {
        _loading.find(`.msg`).addClass('hide');
      }

    } else {
      //full:false 自己业务逻辑中控制 （暂定）
    }
  }


  /**
   *
   * @param params={
   *
   * }
   */
  this.hideLoading = function (params) {
    $('body').children('.pre-loading').hide();
  }
}).call(modules.ui);


