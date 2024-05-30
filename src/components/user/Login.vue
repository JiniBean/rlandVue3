<script setup>
import {GoogleLogin, googleTokenLogin} from "vue3-google-login";
import {useUserDetailStore} from "@/components/store/userDetail.js";

const userDetail = useUserDetailStore();
console.log("로그인 들어옴")
const loginHandler = () => {
  console.log("핸들러들어옴")
  googleTokenLogin()
      .then((response) => {
        console.log("handle the response", response);
        let token = response.access_token;
        console.log("token => ", token);

        let url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`;
        fetch(url)
            .then(resp => resp.json())
            .then(userinfo=>{
              console.log("userinfo => ", userinfo);
              userDetail.email = userinfo.email;
              userDetail.username = userinfo.name
              console.log(userDetail);
            })
      });

}
</script>

<template>
  <form action="" method="post">
    <div>
      <label for="">
        아이디
        <input type="text" value="">
      </label>
    </div>
    <div>
      <label for="">
        비밀번호
        <input type="text" value="">
      </label>
    </div>
    <div>
      <button>로그인</button>
    </div>
    <div>
<!--      <GoogleLogin/>-->
      <a href="" @click.prevent="loginHandler">구글로그인</a>
    </div>
  </form>
</template>

<style scoped>

</style>