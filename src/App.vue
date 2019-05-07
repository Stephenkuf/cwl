<template>
  <div id="app">
    <progress value="0" id="progressBar">
      <div class="progress-container">
        <span class="progress-bar"></span>
      </div>
    </progress>

    <parallax v-if="$route.meta.requiresParallax"></parallax>
    <navigation></navigation>
  
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import parallax from "./components/parallax.vue";
import navigation from "./components/navigation.vue";

export default {
  name: 'app',
  components: {
    parallax,
    navigation
  },
  created() {
    $(document).ready(function() {
      $(document).scroll(function() {
        var $nav = $(".menu-wrapper");
        $nav.toggleClass('fixed-top', $(this).scrollTop() >= $nav.height());
      });
    });

    // progress code
    $(document).ready(function(){
    
      var getMax = function(){
        return $(document).height() - $(window).height();
      }
      
      var getValue = function(){
          return $(window).scrollTop();
      }
        
      if('max' in document.createElement('progress')){
          // Browser supports progress element
          var progressBar = $('progress');
          
          // Set the Max attr for the first time
          progressBar.attr({ max: getMax() });
          $(document).on('scroll', function(){
              // On scroll only Value attr needs to be calculated
              progressBar.attr({ value: getValue() });
          });
        
          $(window).resize(function(){
              // On resize, both Max/Value attr needs to be calculated
              progressBar.attr({ max: getMax(), value: getValue() });
          });   
      }
      else {
          var progressBar = $('.progress-bar'), 
              max = getMax(), 
              value, width;
          
          var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
          }
          
          var setWidth = function(){
            progressBar.css({ width: getWidth() });
          }
          
          $(document).on('scroll', setWidth);

          $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
          });
      }
    });

  }
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  /* line-height: 1.8; */
  font-size: 1rem;
  color: #666;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Poppins",sans-serif;
}

.fixed-top.scrolled {
  background-color: #fff !important;
  transition: background-color 200ms linear;
}

/* Progress  */
progress {
  /* Positioning */
  position: fixed;
  left: 0;
  top: 0;

  /* Dimensions */
  width: 100%;
  height: .25em;

  /* Reset the apperance */  
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Get rid of the default border in Firefox/Opera. */
  border: none;

  /* For Firefox/IE10+ */
  background-color: transparent;

  /* For IE10+, color of the progress bar */
  color: rgb(255, 16, 16) !important;

  /* Place ontop other elements */
  z-index: 9999;
}

.progress-container {
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  height: .25em;
  display: block;
}

.progress-bar {
  background-color: rgb(255, 7, 7);
  width: 50%;
  display: block;
  height: inherit;
}




/* GLOBAL STYLES FOR ORDER PAGES */

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

.steps-icon {
	border-radius: 50%;
	display: block;
	font-size: 25px;
	height: 50px;
	line-height: 43px;
	text-align: center;
	width: 50px;
	border: 4px solid;
	float: left;
}

.steps-title {
  line-height: 50px;
  font-size: 16px;
	font-weight: 500;
  display: block;
  height: 50px;
  float: left;
  padding-left: 8px;
}

.steps-active .steps-icon {
  border-color: #17a2b8 !important;
}

.steps-active .steps-title, .steps-active i {
	color: #17a2b8 !important;
}

.topbar1 {	
  background-color: #F0F0F0;
  width: 100%;   
  table-layout: fixed;
  margin-bottom: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: solid 5px #17a2b8;
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
  color: #17a2b8;
  padding-bottom: 25px;
}
.content-type {
  width: 228px;
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
	font-weight: 400;
}
.order-running-summary-total {
  width: 55%;
  font-size: 34px;
  color: #17a2b8;
  border-right: 2px dotted #E2E2E2;
  float: left;
  padding-left: 30px;
}
.order-running-summary-duration {
  float: right;
  width: 45%;
  font-size: 34px;
  color: #17a2b8;
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

.order-main-details-body .table-div-column {
  display: table-cell;
  width: 45%;
  text-align: right;
  vertical-align: top;
}
.order-main-details-body .input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}

.order-main-details-body .input-group .form-control, .order-main-details-body .input-group-addon, .input-group-btn {
  display: table-cell;
}


.order-main-details-body .form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  /* background-color: #F7F7F7; */
  background-image: none;
  border: 1px solid #E2E2E2;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eee;
  opacity: 1;
}

.order-main-details-body .input-group .form-control:not(:first-child):not(:last-child), .order-main-details-body .input-group-addon:not(:first-child):not(:last-child), .order-main-details-body .input-group-btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.order-main-details-body .input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.order-summary-page-count .input-group .btn-default {
  background-color: rgb(240, 240, 240);
  color: rgb(144, 144, 144);
}
.order-summary-page-count .form-control {
  border-color: rgb(204, 204, 204);
}

.order-main-details-body .btn {
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

.order-main-details-body .input-group-addon, .input-group-btn {   
  vertical-align: middle;
}

.order-main-details-body .input-group-btn {
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
	font-size: 11px;
	letter-spacing: 0.5px;
}

.order-checkbox-active {
  color: #17a2b8;
  border: 3px solid #17a2b8;
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
  padding: 2px 0 0 3px;
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

.btn-default {
  border-color: #ccc;
}

.pull-right {
  float: right!important;
}

</style>
