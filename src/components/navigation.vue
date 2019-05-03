<template>
    <div class="menu-wrapper">
        <nav id="navbar" class="navbar light navbar-expand-lg navbar-custom navbar-light ">
            <div class="container-fluid">
                <router-link to="/" class="nav-brand">
                    <h2 class="text-color">CW Lounge</h2>
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div>
                    <div class="collapse navbar-collapse" id="navbar1">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item nav-spacing active">
                                <a class="text-color  nav-link" href="#">Pricing </a>
                            </li>
                            <li class="nav-item">
                                <a class="text-color nav-spacing nav-link" href="#">About Us </a>
                            </li>
                            <li class="nav-item">
                                <a class="text-color nav-spacing  nav-link" href="#">Join us </a>
                            </li>
                            <li class="nav-item">
                                <a id="login-btn" class="nav-spacing  nav-link" href="#">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    // created() {
    //     $(document).ready(function() {
    //         $(document).scroll(function() {
    //             var $nav = $("nav");
    //             $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    //         });
    //     });
    // }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
}

a {
    color: #161718;
    text-decoration: none;
    background-color: transparent;
}

.navbar-custom {
    line-height: 3rem;
}

nav.light {
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0,0,0,0.07);
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
}

.collapse  > ul > li.nav-item > a {
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    color: #878787;
    text-transform: uppercase;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: .5s;
    transition-duration: .5s;
}

a {
  text-decoration: none;
}


.nav-spacing {
  margin-left: 15px;
}

#login-btn {
    background: #232323;
    border-color: transparent;
    display: inline;
    color: #fff;
    /* font-size: 0.8rem; */
    padding: 0.3rem 1.2rem;
}
</style>

