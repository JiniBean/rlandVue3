<!--<script setup>-->
<!--import {reactive, ref, onMounted} from "vue";-->
<!--import BasketStatus from "@/components/menu/BasketStatus.vue";-->
<!--import Filter from "@/components/menu/Filter.vue";-->
<!--import Pager from "@/components/inc/Pager.vue";-->

<!--const model = reactive({-->
<!--  list:[{},{}],-->
<!--  count: 0-->

<!--});-->

<!--const basketInfo = reactive({-->
<!--  amount:this.cartList.length,-->
<!--  total: 0,-->
<!--  cartList:[]-->

<!--})-->
<!--// -&#45;&#45; Event Handler &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--function addCartHandler(menu){-->
<!--  basketInfo.total += menu.price;-->
<!--  if(basketInfo.cartList.includes(menu.id))-->
<!--      return;-->
<!--  basketInfo.cartList.push(menu.id);-->
<!--}-->
<!--// -&#45;&#45; Life Cycle Handler &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--onMounted(()=>{-->
<!--  console.log("얍");-->
<!--  fetch("http://localhost:8080/menus")-->
<!--      .then((res)=> res.json())-->
<!--      .then((json)=>{-->
<!--        model.list= json;-->
<!--      });-->

<!--  console.log(model.list);-->
<!--})-->
<!--// let promise = fetch("http://localhost:8080/menus");-->

<!--// let response = await fetch("http://localhost:8080/menus");-->
<!--// list = await response.json();-->

<!--</script>-->

<script setup>
import {reactive, ref, onMounted} from "vue";
import BasketStatus from "@/components/menu/BasketStatus.vue";
import Filter from "@/components/menu/Filter.vue";
import Pager from "@/components/inc/Pager.vue";

const model = reactive({
  list: [{}, {}],
  count: 0
});

const basketInfo = reactive({
  price: 0,
  amount: 0,
  list:[]
});

/*--------Event Handler-----------------------------*/
function addCartClickHandler(menu) {
  basketInfo.price += menu.price;
  if(basketInfo.list.indexOf(menu.id)>-1)
    return;
  basketInfo.list.push(menu.id);

}


/*--------Life Cycle Handler-----------------------------*/
onMounted(() => {
  fetch("http://localhost:8080/menus")
      .then((resp) => resp.json())
      .then((json) => {
        model.list = json;
      });
})
/*<!-------------------------------------------------->*/

</script>

<template>
<!--  <div class="n-main">-->
<!--    <main>-->
<!--      <section>-->
<!--        <h1>메뉴 목록</h1>-->
<!--        <div class="n-list">-->
<!--          <section class="">-->
<!--            <h1><a href="">아메리카노</a></h1>-->
<!--            <h2>Americano</h2>-->
<!--            <div>가격</div>-->
<!--            <div>이미지</div>-->
<!--            <div>좋아요 7</div>-->
<!--            <div><a href="">담기</a></div>-->
<!--          </section>-->
<!--        </div>-->
<!--      </section>-->
<!--    </main>-->
<!--  </div>-->
  <main>
    <section class="menu-list">
      <h1 class="d:none">메뉴 검색 목록</h1>
      <div>
        <!-- --------- Filter --------------------------------------------- -->
        <Filter/>

        <section class="menu-card-list" id="menu-card-list">
          <h1 class="d:none">메뉴 목록</h1>
          <div class="content fade">
            <section class="menu-card" v-for="m of model.list">
              <h1>
                <a class="heading-3" href="detail.html" v-text="m.korName"></a></h1>
              <h2 class="heading-2 font-weight:normal color:base-5" v-text="m.engName"></h2>
              <div class="price-block d:flex align-items:flex-end"><span class="font-weight:bold" v-text="m.price"></span>원<span class="soldout-msg ml:auto mr:auto md:d:none">SOLD OUT</span></div>
              <div class="img-block">
                <a >
                  <img src="" />
                </a>
              </div>
              <div class="like-block d:flex justify-content:flex-end">
                <a class="icon icon-heart icon-color:base-4"
                   href="">좋아요</a>
                <span class="font-weight:bold ml:1">2</span>
              </div>
              <div>
                <button>삭제</button>
              </div>
              <div class="pay-block d:flex">
                <!-- <a class="icon md:icon:none icon-cart icon-color:base-0 color:base-0 btn-type:icon btn-cart md:btn-type:text" href="">담기</a> -->
                <form action="/cart/add-menu" method="post">
                  <input type="hidden" name="id">

                  <button @click.prevent="addCartClickHandler(m)"
                      class="icon md:icon:none icon-cart icon-color:base-0 color:base-0 btn-type:icon btn-cart md:btn-type:text">
                    담기
                  </button>
                </form>
                <a class="icon md:icon:none icon-card icon-color:base-0 color:base-0 btn-type:icon btn-card md:btn-type:text" href="">주문하기</a>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>

    <!-- --------- Pager --------------------------------------------- -->
    <pager/>

    <!-- --------- BasketStatus --------------------------------------------- -->
<!--    장바구니 영역에게 값을 전달하며 출력을 부탁-->
<!--    <BasketStatus :price="basketInfo.price"/>-->
    <BasketStatus :list="basketInfo.list"/>
  </main>
</template>

<style>
@import url(@/assets/css/menu/basket-status.css);
@import url(@/assets/css/menu/list.css);
@import url(@/assets/css/menu/rcmd-menu-list.css);
@import url(@/assets/css/menu/card.css);
@import url(@/assets/css/menu/menu-filter.css);
</style>
