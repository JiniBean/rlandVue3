<script setup>
import {useUserDetailStore} from "@/components/store/userDetail.js";
import { useRoute, useRouter}  from "vue-router";

const userDetail = useUserDetailStore();
const router = useRouter();

const logoutHandler = () => {
  userDetail.invalidate();

  // 어디로 가나요? 어떻게 가나요? 코드로?
  router.push("/");

}



</script>
<template>
  <header class="n-header">
<!--    <h1>Rland</h1>-->
    <h1>Rland {{userDetail.username}}</h1>
  <nav>
    <h1 class="d:none">메인메뉴</h1>
    <ul>
      <li><RouterLink class="icon icon:house d:none md:d:inline-block " to="/index">Home</RouterLink></li>
      <li><RouterLink class="icon icon:list md:d:none" to="/mobile-menu">숨김</RouterLink></li>
      <li><RouterLink class="icon icon:local_cafe d:none md:d:inline-block" to="/menu/list">메뉴</RouterLink></li>
      <li><RouterLink class="icon icon:bell " to="/admin/index">관리자</RouterLink></li>
      <li v-if="!userDetail.isAuthenticated()"><RouterLink class="icon icon:user d:none md:d:inline-block" to="/login">로그인</RouterLink></li>
      <li v-else><RouterLink @click="logoutHandler" class="icon icon:sign_out d:none md:d:inline-block" to="/">로그아웃</RouterLink></li>
    </ul>
  </nav>
  </header>
</template>
