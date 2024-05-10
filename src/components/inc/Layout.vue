<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

</script>
<template>
  <Header/>
<!--  <aside>어사이드</aside>-->
  <RouterView/>
  <Footer/>
</template>

<!--data-v 식별자 부여해서 해당 html에서만 사용함 n-list[data-]-->
<!--<style scoped>-->
<!--.n-list{-->
<!--  background-color: darksalmon;-->
<!--}-->
<!--</style>-->