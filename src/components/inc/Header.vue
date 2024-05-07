<template>
  <header class="n-header">
    <h1>Rland</h1>
  <nav>
    <h1 class="d:none">메인메뉴</h1>
    <ul>
      <li><RouterLink class="icon icon:house d:none md:d:inline-block " to="/index">Home</RouterLink></li>
      <li><RouterLink class="icon icon:list md:d:none" to="/mobile-menu">숨김</RouterLink></li>
      <li><RouterLink class="icon icon:local_cafe d:none md:d:inline-block" to="/menu/list">메뉴</RouterLink></li>
      <li><RouterLink class="icon icon:user " to="/admin/index">관리자</RouterLink></li>
    </ul>
  </nav>
  </header>
</template>
<script setup>
</script>