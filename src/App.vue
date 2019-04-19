<template>
  <div id="app">
       <div class="row">
      <div class="col-lg-12">
          <div container-fluid>
              <nav class="navbar navbar-expand-lg fixed-top navbar-custom navbar-light ">
                  <div class="container">
                    <a class="nav-brand">
                      <h2 class="text-color">C W Lounge</h2>
                    </a>                    
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div>
                          <div class="collapse navbar-collapse" id="navbar1">
                            <ul class="navbar-nav mr-auto">
                              <li class="nav-item nav-spacing active">
                                <a class=" text-color  nav-link" href="#">Pricing </a>
                              </li>
                              <li class="nav-item">
                                    <a class="text-color nav-spacing nav-link" href="#">About Us </a>
                              </li>
                              
                              <li class="nav-item">
                                <a class="text-color nav-spacing  nav-link" href="#">Join us </a>
                              </li>
                              <li class="log-in-btn"><button class="btn btn-light  text-dark"> <a href="">LOG IN</a></button></li>
                            </ul>
                          </div>
                        </div>  
                    </div>
              </nav>              
          </div>
      </div>
    </div>
  
    <div>
         <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
 .text-color{
    color: rgb(255, 255, 255) !important;
  }
      .navbar-custom{
        background-color: #141414b0!important;
        -webkit-box-shadow: 2px 6px 20px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 2px 6px 20px 0px rgba(0,0,0,0.75);
      box-shadow: 2px 6px 20px 0px rgba(0,0,0,0.75);
      }
      .cwl-navbar{
        height: fit-content;
      }
      a{
        color: black;
        letter-spacing: 2px;
        text-decoration: none;
        font-family: "Poppins",sans-serif;

      }
      .log-in-btn{
        margin-left: 20px;
      }
      .nav-spacing{
        margin-left: 20px;
      }
</style>
