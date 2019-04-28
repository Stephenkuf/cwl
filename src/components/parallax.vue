<template>
    <!-- ./parallax start-->
    <section>
        <div>
            <div id="home" class="home-parallax" style="height: 600px">
                <div class="home-text-wrapper">
                    <div class="home-logo-text"><a href="#about">Welcome to CW Lounge</a></div>
                </div>
            </div>
        </div>
    </section>
    <!-- ./ parallax end -->
</template>

<script>
export default {

}
</script>

<style scoped>

.home-parallax {
    background: url(../assets/img/banner.jpeg) no-repeat;
    background-size: cover;
    background-position: center top;
}

.overlay {
    background: rgba(0,0,0,0.5);
}

#home {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: table;
    color: #010101;
    z-index: 10;
}

.home-text-wrapper {
    display: table-cell;
    vertical-align: middle;
    margin: auto;
}

.home-logo-text {
    margin: 30px 0 100px;
    position: relative;
    display: block;
    text-align: center;
    width: 100%;
    font-family: 'Oswald', sans-serif;
}

.home-logo-text a {
    font-family: 'Oswald', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 0px;
    text-align: center;
    line-height: 1;
    padding: 5px 25px 0;
    border: 5px solid;
    color: inherit;
    text-decoration: none;
}

@media only screen and (min-width: 1200px) {
    .home-logo-text a {
        font-size: 70px;
        font-weight: bold;
    }  
}

</style>
