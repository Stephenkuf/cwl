<template>
    <div class="main-body">
        <home />

        <all_footer /> 
    </div>
    
</template>

<script>
import home from "@/components/home.vue"
import all_footer from "@/components/all_footer.vue"

export default {
    name: 'mainpage',
    components: {
        home,
        all_footer
    }

}
</script>

<style scoped>

</style>
