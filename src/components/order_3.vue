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
								<span>Account Details </span>
							</div>
							<div style="clear:both"></div>
						</div>
					</div>

					<div class="col-lg-3 steps">
						<div class="">
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
					<div class="col-xs-8 left-container">
						<div class="order-main-details">
							<div class="order-main-details-title">Account Details - Do you already have an account?</div>
						
							<div class="order-main-details-body">
								<div class="order-account-existing">
									<div class="order-account-title-existing">Yes, I already have an account</div>
									<div class="form-group row">
										<div class="col-6">
											<div class="input-group-prepend"> <span class="input-group-text">@</span>
												<input type="text" class="form-control existing-customer-input" id="rw_ordering_existing_customer_email" name="rw_ordering_existing_customer_email" autocomplete="off" placeholder="email address" data-url="http://dashboard.rightlywritten.com/order/ajax/verify-existing-customer" data-next-step-url="http://dashboard.rightlywritten.com/order/cart/4">
											</div>
										</div>
										<div class="col-6">
											<div class="input-group-prepend"> <span class="input-group-text"><i class="fa fa-key"></i></span>
											<input type="password" class="form-control existing-customer-input" id="rw_ordering_existing_customer_password" name="rw_ordering_existing_customer_password" autocomplete="off" placeholder="password" data-url="http://dashboard.rightlywritten.com/order/ajax/verify-existing-customer" data-next-step-url="http://dashboard.rightlywritten.com/order/cart/4">
											</div>
										</div>
									</div>
									<div class="clearfix"></div>
								</div>

								<div class="order-account-or">-OR-</div>

								<div class="order-account-new">
									<div class="order-account-title-new">No, Create a new account</div>

									<div class="form-group row">
										<div class="col-6">
											<label class="control-label"> Full Name</label>
											<input type="text" class="form-control new-customer-input" id="rw_ordering_new_customer_name" name="rw_ordering_new_customer_name" autocomplete="off" data-url="http://dashboard.rightlywritten.com/order/ajax/add-new-customer">
											<input type="hidden" id="rw_ordering_new_customer_company_name" name="rw_ordering_new_customer_company_name">
										</div>
									
										<div class="col-6">
											<label class="control-label"> Email Address</label>
											<input type="text" class="form-control new-customer-input" id="rw_ordering_new_customer_company_email" name="rw_ordering_new_customer_company_email" autocomplete="off" data-url="http://dashboard.rightlywritten.com/order/ajax/add-new-customer" data-next-step-url="http://dashboard.rightlywritten.com/order/cart/4">
										</div>
									</div>
									<div class="clearfix"></div>
								</div>
								<div class="clearfix"></div>
							</div> <!-- order body -->
						</div> <!-- order-main-details end -->
					</div>

						<div class="col-xs-4 right-container">
							<div class="order-running-summary">
								<div class="order-running-summary-header ">
									<div class="order-running-summary-total" id="running-summary-total">$45</div>
									<div class="order-running-summary-duration" id="running-summary-duration">6 days</div>
									<div class="clearfix"></div>
								</div>

								<div class="order-summary-page-count">
									<div class="table-div">
										<div class="table-div-column"> <i class="fa fa-file order-summary-icon"></i>
										<ul class="order-summary-icon-text">
											<li class="order-summary-icon-header">Word Count</li>
											<li class="order-summary-icon-subheader">Per content item</li>
										</ul>
										<div class="clearfix"></div>
										</div>
										<div class="table-div-column">
										<!--page counter-->
										<div class="input-group">
											<span class="input-group-btn">
												<button type="button" class="btn btn-default btn-number" id="wordcount-minus-button" data-type="minus" data-field="wordcount"> <span><i class="fas fa-minus"></i></span> </button>
											</span>
											<input type="text" width="fit-content" name="wordcount" class="form-control input-number" min="1" max="100000000000" id="wordcount">
											<span class="input-group-btn">
												<button type="button" class="btn btn-default btn-number" id="wordcount-plus-button" data-type="plus" data-field="wordcount"> <span><i class="fas fa-plus"></i></span> </button>
											</span>
									    </div>
										<!--page counter-->
										</div>
									</div>
								</div>

								<div class="order-summary-page-count">
									<div class="table-div">
										<div class="table-div-column"> <i class="fa fa-copy order-summary-icon"></i>
											<ul class="order-summary-icon-text">
												<li class="order-summary-icon-header">Quantity</li>
												<li class="order-summary-icon-subheader">Number of items</li>
											</ul>
											<div class="clearfix"></div>
										</div>
										<div class="table-div-column">
										<!--page counter-->
										<div class="input-group">
											 <span class="input-group-btn">
													<button type="button" class="btn btn-default btn-number" id="wordcount-minus-button" data-type="minus" data-field="wordcount" > <span ><i class="fas fa-minus"></i></span> </button>
											</span>
											<input type="text" width="fit-content" name="wordcount" class="form-control input-number" min="1" max="100000000000" id="wordcount" >
											<span class="input-group-btn">
													<button type="button" class="btn btn-default btn-number" id="wordcount-plus-button" data-type="plus" data-field="wordcount" > <span><i class="fas fa-plus"></i></span> </button>
											</span>
									    </div>
										<!--page counter-->
										</div>
									</div>
								</div>


								<div class="order-summary-page-count">
									<div class="table-div">
										<div class="table-div-column" style="width:45%;"> <i class="fa fa-clock-o order-summary-icon"></i>
											<ul class="order-summary-icon-text">
												<li class="order-summary-icon-header">Turnaround</li>
												<li class="order-summary-icon-subheader">select one</li>
											</ul>
											<div class="clearfix"></div>
										</div>
										<div class="table-div-column" style="width:55%;">
										<!--express selector-->
										<div class="order-checbox-container select-quality" id="selector-quality-standard" data-ajax-url="http://dashboard.rightlywritten.com/order/ajax/toggle-selected-item" data-selection="standard">
											<div class="order-checkbox-selector order-checkbox-active" id="selector-quality-standard-checkbox"><i class="fa fa-check"></i></div>
											<div class="order-checkbox-text order-checkbox-text-active" id="selector-quality-standard-text">
											<div class="order-checkbox-text-title">Standard</div>
											<div class="order-checkbox-text-sub">turnaround</div>
											</div>
										</div>
										<div class="order-checbox-container select-quality" style="margin-bottom:0px;" id="selector-quality-premium" data-ajax-url="http://dashboard.rightlywritten.com/order/ajax/toggle-selected-item" data-selection="quality_premium">
											<div class="order-checkbox-selector" id="selector-quality-premium-checkbox"></div>
											<div class="order-checkbox-text" id="selector-quality-premium-text">
											<div class="order-checkbox-text-title">Express</div>
											<div class="order-checkbox-text-sub">turnaround</div>
											</div>
										</div>
										<!--express selector-->
										</div>
									</div>
								</div>

								<div class="order-summary-page-count">
									<div class="table-div">
										<div class="table-div-column" style="width:45%;"> <i class="fa fa-graduation-cap order-summary-icon"></i>
											<ul class="order-summary-icon-text">
												<li class="order-summary-icon-header">Quantity</li>
												<li class="order-summary-icon-subheader">select one</li>
											</ul>
											<div class="clearfix"></div>
										</div>
										<div class="table-div-column" style="width:55%;">
										<!--express selector-->
										<div class="order-checbox-container select-quality" id="selector-quality-standard" data-ajax-url="http://dashboard.rightlywritten.com/order/ajax/toggle-selected-item" data-selection="standard">
											<div class="order-checkbox-selector order-checkbox-active" id="selector-quality-standard-checkbox"><i class="fa fa-check"></i></div>
											<div class="order-checkbox-text order-checkbox-text-active" id="selector-quality-standard-text">
											<div class="order-checkbox-text-title">Standard</div>
											<div class="order-checkbox-text-sub">quality</div>
											</div>
										</div>
										<div class="order-checbox-container select-quality" style="margin-bottom:0px;" id="selector-quality-premium" data-ajax-url="http://dashboard.rightlywritten.com/order/ajax/toggle-selected-item" data-selection="quality_premium">
											<div class="order-checkbox-selector" id="selector-quality-premium-checkbox"></div>
											<div class="order-checkbox-text" id="selector-quality-premium-text">
											<div class="order-checkbox-text-title">Premium</div>
											<div class="order-checkbox-text-sub">quality</div>
											</div>
										</div>
										<!--express selector-->
										</div>
									</div>
								</div>

								<div class="order-summary-page-button">
									<router-link to="/order/4" class="btn btn-large btn-success pull-right" id="steps-button">CONTINUE</router-link>
									<router-link to="/order/2" class="btn btn-large btn-default pull-left">BACK</router-link>
									<div class="clearfix"></div>
								</div>
								
							</div>														
						</div>
				</div>
			</section>




		</div><!-- /. container wrapper -->							
    </div>    
</template>
<script>
export default {
    name:'snip'
}
</script>


<style scoped>


/* ORDER 3 */
.order-account-existing {
    margin-bottom: 40px;
}
.order-account-title-existing {
    padding-bottom: 10px;
    font-size: 16px;
}
.order-form-halves {
    width: 360px;
    float: left;
    padding-left: 24px;
}
.order-account-or {
    text-align: center;
    font-size: 20px;
    padding-bottom: 25px;
}
.order-account-new {
    padding: 15px;
    background-color: #F0F0F0;
    margin-bottom: 30px;
    font-weight: normal;
}
.order-account-title-new {
    padding-bottom: 10px;
    font-size: 16px;
    color: rgb(92, 184, 92);
}
.order-main-details .input-group-text {
    border-radius: 0px;
    background-color: #F0F0F0;
    color: rgb(144, 144, 144);
}

.input-group-text:first-child {
    border-right: 0;
}
.order-main-details .form-group {
    margin-bottom: 25px;
}

.order-main-details .control-label {
    font-weight: normal;
}

.order-main-details .form-control {
    background-color: #ffffff;
    height: 40px;
    /* line-height: 40px !important; */
    /* box-shadow: none; */
    border-radius: 0px;
    color: rgb(128, 128, 128);
    border-color: #DDDDDD;
}

input:-internal-autofill-previewed, input:-internal-autofill-selected, textarea:-internal-autofill-previewed, textarea:-internal-autofill-selected, select:-internal-autofill-previewed, select:-internal-autofill-selected  {
	background-color: #ffffff !important;
}
</style>

