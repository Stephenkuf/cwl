<template>
    <div>

		<div class="container main">
			<section class="topbar">
				<div class="row topbar1">

					<div class="col-lg-3" >
						<div class=" steps steps-active">
							<div class="steps-icon">
								<i class="fa fa-check"></i>
							</div>
							<div class="steps-title">
								<span>Service type</span>
							</div>
							<div style="clear:both"></div>
						</div>
					</div>

					<div class="col-lg-3" >
						<div class=" steps ">
							<div class="steps-icon">
								<i class="fa fa-check"></i>
							</div>
							<div class="steps-title">
								<span>Content Details</span>
							</div>
							<div style="clear:both"></div>
						</div>
					</div>

					<div class="col-lg-3" >
						<div class=" steps ">
							<div class="steps-icon">
								<i class="fa fa-check"></i>
							</div>
							<div class="steps-title">
								<span>Service type</span>
							</div>
							<div style="clear:both"></div>
						</div>
					</div>

					<div class="col-lg-3" >
						<div class=" steps ">
							<div class="steps-icon">
								<i class="fa fa-check"></i>
							</div>
							<div class="steps-title">
								<span>Service type</span>
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
								<div class="order-main-details-title">Select the type of content that you need</div>
						
								<div class="order-main-details-body">
									<div>
										<div id="select_content_1" class="content-type url-link select-content" style="margin-left:5px;"> 
											<i class="fa fa-file-text-o content-type-icon"></i>
										<div class="content-type-title">Article</div>
										<div class="clearfix"></div>
										</div>
									</div>
									
									<div>
										<div id="select_content_1" class="content-type url-link select-content" style="margin-left:5px;"> 
											<i class="fa fa-file-text-o content-type-icon"></i>
										<div class="content-type-title">Article</div>
										<div class="clearfix"></div>
										</div>
									</div>
									<div>
										<div id="select_content_1" class="content-type url-link select-content" style="margin-left:5px;"> 
											<i class="fa fa-file-text-o content-type-icon"></i>
										<div class="content-type-title">Article</div>
										<div class="clearfix"></div>
										</div>
									</div>
									<div>
										<div id="select_content_1" class="content-type url-link select-content" style="margin-left:5px;"> 
											<i class="fa fa-file-text-o content-type-icon"></i>
										<div class="content-type-title">Article</div>
										<div class="clearfix"></div>
										</div>
									</div>

									<div>
										<div id="select_content_1" class="content-type url-link select-content" style="margin-left:5px;"> 
											<i class="fa fa-file-text-o content-type-icon"></i>
										<div class="content-type-title">Article</div>
										<div class="clearfix"></div>
										</div>
									</div>
									<div>
										<div id="select_content_1" class="content-type url-link select-content" style="margin-left:5px;"> 
											<i class="fa fa-file-text-o content-type-icon"></i>
										<div class="content-type-title">Article</div>
										<div class="clearfix"></div>
										</div>
									</div>
									<div>
										<div id="select_content_1" class="content-type url-link select-content" style="margin-left:5px;"> 
											<i class="fa fa-file-text-o content-type-icon"></i>
										<div class="content-type-title">Article</div>
										<div class="clearfix"></div>
										</div>
									</div>
									<div>
										<div id="select_content_1" class="content-type url-link select-content" style="margin-left:5px;"> 
											<i class="fa fa-file-text-o content-type-icon"></i>
										<div class="content-type-title">Article</div>
										<div class="clearfix"></div>
										</div>
									</div>
								</div> 
							</div>
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
													<button type="button" class="btn btn-success btn-number" id="wordcount-minus-button" data-type="minus" data-field="wordcount" > <span ><i class="fas fa-minus"></i></span> </button>
											</span>
											<input type="text" width="fit-content" name="wordcount" class="form-control input-number" min="1" max="100000000000" id="wordcount" >
											<span class="input-group-btn">
													<button type="button" class="btn btn-success btn-number" id="wordcount-plus-button" data-type="plus" data-field="wordcount" > <span><i class="fas fa-plus"></i></span> </button>
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
													<button type="button" class="btn btn-success btn-number" id="wordcount-minus-button" data-type="minus" data-field="wordcount" > <span ><i class="fas fa-minus"></i></span> </button>
											</span>
											<input type="text" width="fit-content" name="wordcount" class="form-control input-number" min="1" max="100000000000" id="wordcount" >
											<span class="input-group-btn">
													<button type="button" class="btn btn-success btn-number" id="wordcount-plus-button" data-type="plus" data-field="wordcount" > <span><i class="fas fa-plus"></i></span> </button>
											</span>
									    </div>
										<!--page counter-->
										</div>
									</div>
								</div>


								<div class="order-summary-page-count">
									<div class="table-div">
										<div class="table-div-column" style="width:45%;"> <i class="fa fa-graduation-cap order-summary-icon"></i>
										<ul class="order-summary-icon-text">
											<li class="order-summary-icon-header">Quality</li>
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
									<a href="#" class="btn btn-large btn-success pull-right " id="steps-button">CONTINUE</a>
									
									<div class="clearfix"></div>
								</div>
								
							</div>														
						</div>
				</div>
			</section>




		</div>								
    </div>    
</template>
<script>
export default {
    name:'snip'
}
</script>


<style scoped>

.main {
	margin-top: 100px;
	margin-bottom: 100px;
}

.steps {
    display: table-cell;
	color: #B6B5B5;
    width: 20%;
    padding-left: 30px;
    padding-right: 1px;
    border-right: 2px dotted #E5E5E5;
}
.steps-icon{

    border-radius: 50%;
  	
    display: block;
    font-size: 30px;
    height: 50px;
    line-height: 43px;
    text-align: center;
    width: 50px;
    border: 4px solid;
    float: left;
}
.steps-active .steps-icon {
    border-color: #83c067 !important;
	color: #83c067 !important;
}

 .topbar1{
	
    background-color: #F0F0F0;
    width: 100%;   
    table-layout: fixed;
    margin-bottom: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-left: solid 5px #83C067;

 }

.steps-title {
    line-height: 50px;
    font-size: 19px;
    display: block;
    height: 50px;
    float: left;
    padding-left: 8px;
}


.order-main-details {
    border: 1px solid #DDDDDD;
    padding: 10px;
    font-size: 13px;
    font-weight: normal;
    color: #777;
	
}

.order-main-details-title {
    text-align: center;
    font-size: 20px;
    color: #83C067;
    padding-bottom: 25px;
}
.content-type {
    width: 234px;
    border: 1px solid #f0ecec;
    float: left;
    margin-right: 18px;
    margin-bottom: 30px;
    background-color: rgb(240, 240, 240);
}
.content-type-icon {
    float: left;
    font-size: 23px;
    display: block;
    padding: 13px 10px 13px;
}
.content-type-title {
    float: right;
    padding: 15px 0px 15px 8px;
    font-size: 14px;
    width: 177px;
    background-color: #FFFFFF;
    color: rgb(144, 144, 144);
    /* margin-left: 40px; */
}
.clearfix {
    clear: both;
}

.left-container {
    width: 750px;
	margin-right: 10px;
	height: 400px;
	
}
.right-container {
    width: 350px;
}

.order-running-summary {
    background-color: #F0F0F0;
    padding: 10px 20px;
}

.order-running-summary-header {
    border-bottom: 1px solid #E2E2E2;
    padding-bottom: 20px;
    text-align: center;
    margin-bottom: 20px;
}
.order-running-summary-total {
    width: 55%;
    font-size: 34px;
    color: #74BA55;
    border-right: 2px dotted #E2E2E2;
    float: left;
    padding-left: 30px;
}
.order-running-summary-duration {
    float: right;
    width: 45%;
    font-size: 34px;
    color: #74BA55;
}
.order-summary-page-count {
    border-bottom: 1px solid #E2E2E2;
    padding-bottom: 10px;
    text-align: center;
    margin-bottom: 10px;
}
.table-div {
    width: 100%;
    display: table;
    table-layout: fixed;
}
.table-div-column {
    display: table-cell;
    width: 45%;
    text-align: right;
    vertical-align: top;
}
.order-summary-icon {
    font-size: 34px;
    color: #909090;
    float: left;
}
.order-summary-icon-text {
    float: left;
    list-style: none;
    padding: 0;
    text-align: left;
    padding-left: 8px;
}
.order-summary-icon-header {
    font-size: 13px;
}
.order-summary-icon-subheader {
    font-size: 10px;
}
.table-div-column {
    display: table-cell;
    width: 45%;
    text-align: right;
    vertical-align: top;
}
.input-group {
    position: relative;
    display: table;
    border-collapse: separate;
}
.input-group .form-control:not(:first-child):not(:last-child), .input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.input-group-btn {
    position: relative;
    font-size: 0;
    white-space: nowrap;
}
.order-summary-page-count .input-group .btn-default {
    background-color: rgb(240, 240, 240);
    color: rgb(144, 144, 144);
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.input-group-addon, .input-group-btn {
    width: 1%;    
    vertical-align: middle;
}
.input-group-btn {
    display: table-cell;
}
.order-checbox-container {
    background-color: transparent;
    width: 100%;
    display: table;
    table-layout: fixed;
    margin-bottom: 10px;
    padding: 3px;
    padding-left: 20px;
}
.order-checkbox-active {
    color: #5cb85c;
    border: 3px solid #5cb85c;
    cursor: pointer;
}
.order-checkbox-selector {
    display: table-cell;
    width: 30px;
    text-align: center;
    vertical-align: top;
    border: 3px solid #CCCCCC;
    border-radius: 50%;
    font-size: 15px;
    padding: 2px 0px 0px 3px;
    color: #cccccc;
}
.order-checkbox-text {
    display: table-cell;
    /* width: 50%; */
    text-align: left;
    vertical-align: top;
    padding-left: 8px;
}

.btn-large {
    padding: 11px 16px;
}


.pull-right {
    float: right!important;
}

</style>

