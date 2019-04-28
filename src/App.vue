<template>
  <div id="app">

    <parallax />
    <navigation />
  
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
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
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
  line-height: 1.8;
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
</style>
