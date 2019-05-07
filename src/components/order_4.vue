<template>
  <div>
    <div class="container main">
      <section class="topbar">
        <div class="row topbar1">
          <div class="col-lg-3 steps">
            <div class="steps-active">
              <div class="steps-icon">
                <i class="fa fa-check"></i>
              </div>
              <div class="steps-title">
                <span>Content Type</span>
              </div>
              <div style="clear:both"></div>
            </div>
          </div>

          <div class="col-lg-3 steps">
            <div class="steps-active">
              <div class="steps-icon">
                <i class="fa fa-check"></i>
              </div>
              <div class="steps-title">
                <span>Content Details</span>
              </div>
              <div style="clear:both"></div>
            </div>
          </div>

          <div class="col-lg-3 steps">
            <div class="steps-active">
              <div class="steps-icon">
                <i class="fa fa-check"></i>
              </div>
              <div class="steps-title">
                <span>Account Details</span>
              </div>
              <div style="clear:both"></div>
            </div>
          </div>

          <div class="col-lg-3 steps">
            <div class="steps-active">
              <div class="steps-icon">
                <i class="fa fa-check"></i>
              </div>
              <div class="steps-title">
                <span>Complete Order</span>
              </div>
              <div style="clear:both"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="row">
          <!--MAIN CONTEN BOX-->
          <div class="col-xs-12 container">
            <div class="order-main-details" style="border:0;">
              <div class="order-main-details-title"></div>
              <div class="order-main-details-body">
                <div class="order-summary-total">
                  Pay now to complete your order.
                  <br>
                  <span class="order-summary-amount">$162.50</span>

                  <div class="order-summary-buttons">
                    <button
                      href="#"
                      class="btn btn-large btn-info pull-right"
                      id="paynow-button"
                      data-session-id="vUVmhjDXAD"
                      data-url="http://dashboard.rightlywritten.com/order/ajax/register-new-order">PAY NOW</button>
                    
					          <router-link to="/order/1" class="btn btn-large btn-default pull-left"> EDIT MY ORDER </router-link>
					
                    <div class="clearfix"></div>
                  </div>

                  <div class="order-summary-cards">
                    <i class="fab fa-cc-paypal"></i>
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-amex"></i>
                    <i class="fab fa-cc-discover"></i>
                  </div>
                </div>
                <div class="paypal-form">
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    id="paypal-form"
                    name="paypal-form"
                    target="_top">

                    <input type="hidden" name="cmd" value="_xclick">
                    <input type="hidden" name="business" value="accounts@rightlywritten.com">
                    <input type="hidden" name="item_name" value="Article x 5">
                    <input type="hidden" name="item_number" value="vUVmhjDXAD">
                    <input
                      type="hidden"
                      name="image_url"
                      value="http://dashboard.rightlywritten.com/application/themes/default/common/images/logo.png"
                    >
                    <input type="hidden" name="amount" value="162.5">
                    <input type="hidden" name="no_shipping" value="1">
                    <input type="hidden" name="no_note" value="1">
                    <input type="hidden" name="currency_code" value="USD">
                    <input type="hidden" name="bn" value="FC-BuyNow">
                    <input
                      type="hidden"
                      name="return"
                      value="http://dashboard.rightlywritten.com/client/thankyou/paypal"
                    >
                    <input
                      type="hidden"
                      name="cancel_return"
                      value="http://dashboard.rightlywritten.com/order/cart/1"
                    >
                    <input type="hidden" name="rm" value="2">
                    <input
                      type="hidden"
                      name="notify_url"
                      value="http://dashboard.rightlywritten.com/api/paypalipn"
                    >
                    <input type="hidden" name="custom" value="|jeggsatony@gmail.com|Jegede Ayodeji">
                    <input type="hidden" name="invoice_unique_id" value="vUVmhjDXAD">
                  </form>
                </div>

                <div class="clearfix"></div>
              </div>
              <!-- /. details-body -->
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- /. container wrapper -->
  </div>
</template>
<script>
export default {
  name: "snip"
};
</script>


<style scoped>

/* Order 4 styles */
.order-summary-total {
  text-align: center;
  width: 600px;
  background-color: #f0f0f0;
  margin: auto;
  padding: 30px;
  font-size: 25px;
  color: rgb(165, 165, 165);
}

.order-summary-amount {
  color: #17a2b8;
  font-size: 35px;
  padding-top: 10px;
  display: block;
}
.order-summary-buttons {
  width: 300px;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 10px;
}

.order-summary-cards {
  padding-top: 20px;
  font-size: 50px;
  color: rgb(195, 195, 195);
}

.btn-large {
  padding: 11px 16px;
}

.btn-default {
  border-color: #ccc;
}
</style>

