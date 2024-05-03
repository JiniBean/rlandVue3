<!--VUE3.0 이전의 options API vue 컴파일러를 사용하지 못했음 -->
<!--<style>-->

<!--</style>-->

<!--<script>-->
<!--  export default {-->
<!--      data(){-->
<!--          return{-->
<!--            x:30-->
<!--          }-->
<!--      },-->
<!--      -->
<!--  }-->
<!--</script>-->


<!--setup : 컴포지션 영역이라는 뜻-->
<!--1. 섞어 쓰기 (옵션즈 안에 컴포지션)-->
<!-- <script>
  import {ref} from "vue"

  export default {
      setup(){
        let x = 50;

        return {x}
      },
      data() {
        return {
          // x: 30
        };
      }

  }
</script> -->


<!--2. 컴포지션만 쓰기-->
<script setup>
import {ref} from 'vue'

    let x = ref(50);

    function btnClickHandler(){
        console.log(x);
    
    }
</script>

<template>
    <section>
        <h1>하하하{{x}}</h1>
        <div>
            <input v-model="x">
            <button @click.prevent="btnClickHandler">클릭</button>
        </div>
    </section>
</template>
