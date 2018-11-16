## transition 

css 过渡

### demos

####  max-height 展开收起 动效

::: demo  transition max-height
```html
      <div class="max-height-demo">
          <div class="pre-transition max-height">
             <div class="content">
                    每人每活动日限享1次优惠，每月限2次优惠。每个活动日限量1000名，活动期间名额共计26000笔，先到先得。
                
                    1.本活动通过平安口袋银行或云闪付APP二维码支付，客户须以除金通卡、花漾卡、烟草采购卡以外的卡号以“62”开头的平安银联信用卡消费方可享受优惠；支付方式仅限绑定实体卡为“62”开头银联卡（IC卡或磁条卡）的平安口袋银行或云闪付APP二维码支付；
                    2.本活动仅适用于浙江所有有扫码枪的1600多家十足便利店参与，可与商户打折、促销优惠活动共享，门店当值人员不可参加活动；
                    3.香烟、储值类商品不参加活动，使用代金券、储值卡后使用我行信用卡的消费金额如不满指定金额则不享受本活动优惠；
                    4.若同一持卡人发生拆单、虚假刷单等恶意行为，将取消优惠资格并不另行通知；
                    5.若出现因商户单方面原因导致发生的交易不能正常进行等影响持卡人无法参与活动的原因，如商户刷卡POS机故障，商户临时停业等，请持卡人与商户沟通解决；
                    6.在法律许可范围内，本次活动的规则如有调整或变更，以平安口袋银行APP公告为准。
              </div>
          </div>
          <div id="max-height-toggle" style="line-height: 40px;text-align: center;">toggle</div>
      </div>
      <style type="text/css">
         .max-height-demo .max-height{
              /* max-height:your_max_height; */
              max-height: 2.98rem;
         }
         
      </style>
      <script type="text/javascript">
          $('#max-height-toggle').click(function(e) {
              $(this).prev('.max-height').toggleClass('open');
          })
      </script>
```
:::


####  侧滑 动效

