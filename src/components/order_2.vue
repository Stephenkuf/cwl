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
						<div class="">
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
							<div class="order-main-details-title">Tell us more about your content</div>
						
							<div class="order-main-details-body">
						
								<form name="step-2-form" id="step-2-form" action="http://dashboard.rightlywritten.com/order/cart/3/" method="post">
									<div class="order-form-two-thirds">
										<div class="form-group">
										<label class="control-label"> Subject</label>
										<input type="text" class="form-control" id="rw_ordering_content_subject" name="rw_ordering_content_subject" autocomplete="off">
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Industry Related To Subject</label>
										<select class="form-control" id="rw_ordering_content_industry" name="rw_ordering_content_industry">
											<option value="Art &amp; Design" selected="" style="">Art &amp; Design</option>
											<option value="Automotive" style="">Automotive</option>
											<option value="Beauty &amp; Fashion" style="">Beauty &amp; Fashion</option>
											<option value="Business" style="">Business</option>
											<option value="Career" style="">Career</option>
											<option value="Consumer Products" style="">Consumer Products</option>
											<option value="Education" style="">Education</option>
											<option value="Entertainment" style="">Entertainment</option>
											<option value="Environmental" style="">Environmental</option>
											<option value="Family &amp; Relationships" style="">Family &amp; Relationships</option>
											<option value="Food &amp; Beverage" style="">Food &amp; Beverage</option>
											<option value="Health &amp; Fitness" style="">Health &amp; Fitness</option>
											<option value="Home &amp; Garden" style="">Home &amp; Garden</option>
											<option value="Law" style="">Law</option>
											<option value="Lifestyle" style="">Lifestyle</option>
											<option value="Marketing" style="">Marketing</option>
											<option value="Media &amp; Publishing" style="">Media &amp; Publishing</option>
											<option value="Medical" style="">Medical</option>
											<option value="Pets" style="">Pets</option>
											<option value="Real Estate" style="">Real Estate</option>
											<option value="Science &amp; Technology" style="">Science &amp; Technology</option>
											<option value="Spirituality" style="">Spirituality</option>
											<option value="Sports" style="">Sports</option>
											<option value="Travel" style="">Travel</option>
											<option value="Other" style="">Other</option>
										</select>
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Preferred Writing style</label>
										<select class="form-control" id="rw_ordering_content_style" name="rw_ordering_content_style">
											<option value="Informative &amp; Educational" selected="" style="">Informative &amp; Educational</option>
											<option value="Lighthearted &amp; Conversational" style="">Lighthearted &amp; Conversational</option>
											<option value="Sales Driven &amp; Promotional" style="">Sales Driven &amp; Promotional</option>
										</select>
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Preferred Voice</label>
										<select class="form-control" id="rw_ordering_content_voice" name="rw_ordering_content_voice">
											<option value="First Person" style="">First Person</option>
											<option value="Second Person" selected="" style="">Second Person</option>
											<option value="Third Person" style="">Third Person</option>
											<option value="Let The Copywriter Decide" style="">Let The Copywriter Decide</option>
										</select>
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Include Keyword (if any)</label>
										<input type="text" class="form-control" id="rw_ordering_content_keywrods" name="rw_ordering_content_keywrods" autocomplete="off">
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Target Audience</label>
										<select class="form-control" id="rw_ordering_content_audience" name="rw_ordering_content_audience">
											<option value="Business Owners" selected="" style="">Business Owners</option>
											<option value="Consumers" style="">Consumers</option>
											<option value="Educators" style="">Educators</option>
											<option value="Government Agencies" style="">Government Agencies</option>
											<option value="Other" style="">Other</option>
										</select>
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Target Gender</label>
										<select class="form-control" id="rw_ordering_content_gender" name="rw_ordering_content_gender">
											<option value="Men" style="">Men</option>
											<option value="Women" style="">Women</option>
											<option value="Both Men &amp; Women" selected="" style="">Both Men &amp; Women</option>
										</select>
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Reference Link (if any)</label>
										<input type="text" class="form-control" id="rw_ordering_content_link" name="rw_ordering_content_link" autocomplete="off">
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Include Free Image</label>
										<select class="form-control" id="rw_ordering_content_free_image" name="rw_ordering_content_free_image">
											<option value="Yes" style="">Yes</option>
											<option value="No" selected="" style="">No</option>
										</select>
										</div>
									</div>
									<div class="order-form-thirds">
										<div class="form-group">
										<label class="control-label"> Branded or Generic</label>
										<select class="form-control" id="rw_ordering_content_branded" name="rw_ordering_content_branded">
											<option value="Generic" selected="" style="">Generic</option>
											<option value="Branded" style="">Branded</option>
										</select>
										</div>
									</div>
									<div class="order-form-thirds" id="branded_option_details" style="display:none;">
										<div class="form-group">
										<label class="control-label"> Enter Brand Name</label>
										<input type="text" class="form-control" id="rw_ordering_content_brand_name" name="rw_ordering_content_brand_name" autocomplete="off" value="">
										</div>
									</div>
									<!--blog posting option-->
									<div class="order-form-thirds" id="blog-posting-url" style="display:none; clear:left;">
										<div class="form-group">
										<label class="control-label"> Blog URL</label>
										<input type="text" class="form-control" id="rw_ordering_content_blog_url" name="rw_ordering_content_blog_url" autocomplete="off" value="">
										</div>
									</div>
									<!--blog posting option-->
									<!--blog posting option-->
									<div class="order-form-thirds" id="blog-posting-logins" style="display:none;">
										<div class="form-group">
										<label class="control-label"> Blog Login Details</label>
										<input type="text" class="form-control" id="rw_ordering_content_blog_logins" name="rw_ordering_content_blog_logins" autocomplete="off" value="">
										</div>
									</div>
									<!--blog posting option-->
									<div class="clearfix"></div>
									<!--optional info-->
									<div class="content-details-additional-info">
										<div class="form-group">
										<label class="control-label"> Any additional comments / special instructions?</label>
										<textarea name="rw_ordering_notes" id="rw_ordering_notes" class="form-control order-text-area ">                                        </textarea>
										</div>
										<!---------------------------SIMPLE AJAX FILEUPLOAD---------------------->
										<div>
										
										<!--upload button-->
										<div id="upload-button-container" style="padding-bottom:10px;">
											<input id="upload-button" class="btn btn-mid btn-info clearfix" type="button" value="Attach A New File">
										</div>
										<!--upload button end-->
										<!--file info-->
										<div id="file-info-div"> </div>
										<!--file info end-->
										<!--progress bar-->
										<div id="progress-container">
											<div class="progress active progress-table">
											<div id="progress-bar" class="progress-bar progress-bar-primary progress-bar-table" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>
											</div>
										</div>
										<!--progress bar end-->
										<!--results div-->
										<div id="results-container" style="display:none;"></div>
										<!--results div end-->
										<!--results div extended (will show actual attached file etc)-->
										<div id="results-container-extended" style="display:none;"> <i class="fa fa-paperclip"></i> <span id="new-file-name"></span> <a href="#" id="delete-uploaded-file"> <i class="fa fa-remove text-danger"></i></a> </div>
										<!--results extended end-->
										</div>
										<!---------------------------SIMPLE AJAX FILEUPLOAD END---------------------->
										<div class="clearfix"></div>
									</div>
									<!--optional info-->
								</form><!-- /. forms -->

								<div class="clearfix"></div>
							</div> 
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
									<router-link to="/order/3" class="btn btn-large btn-success pull-right" id="steps-button">CONTINUE</router-link>
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


/* order page 2 style */

.order-form-two-thirds {
    width: 480px;
    float: left;
    padding-left: 24px;
}

.order-form-thirds {
    width: 240px;
    float: left;
    padding-left: 24px;
}

.form-control {
	border-radius: 0;
}

.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
}

label {
    display: inline-block;
    margin-bottom: 0.2rem;
}

.content-details-additional-info {
    background-color: #F0F0F0;
    padding: 17px;
    margin-left: 17px;
    margin-right: 17px;
}
.order-text-area {
    height: 100px !important;
    text-align: left !important;
    padding: 8px !important;
    line-height: 1.5 !important;
}
.progress {
    height: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: #f5f5f5;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}
</style>

