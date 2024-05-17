<script setup>
// 속성 변수를 정의하면 밖에서 사용할 수 있음
// defineProps(["price"]);
const props = defineProps({
  price:Number
});

</script>
<template>
  <section class="basket-status">
    <h1 class="d:none">Basket Bar</h1>
    <dl class="ph:3">
      <dt>금액</dt>
      <dd class="ml:2">{{props.price}}원</dd>
      <dt class="d:none">수량</dt>
      <dd class="ml:auto">
        <a href="/basket/list"
           class="icon icon-basket_outline icon-color:base-0 icon-size:4 icon-text-with"
        >1</a>
      </dd>
    </dl>
  </section>
</template>