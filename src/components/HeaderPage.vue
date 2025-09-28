<script setup lang="ts">

import LoginButton from "@/components/UI/LoginButton.vue";


</script>

<template>
  <header v-once>
    <div class="logo">
      <img src="../assets/images/Vue.js_Logo.svg" alt="Vue logo">
      <p class="logo__name">Vue basic</p>
    </div>
    <div class="pages">
      <RouterLink to="#">Public</RouterLink>
      <RouterLink to="#">Protected</RouterLink>
    </div>
    <LoginButton />
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 10px 20px;
  background-color: #4cb291;
  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    width: 300px;
    height: 150px;
    align-items: center;
    img {
      width: 150px;
    }
    &__name {
      font-family: $logo-font;
      font-size: 28px;
      color: $white;
    }
  }
  .pages {
    display: flex;
    align-items: center;
    a {
      font-family: $logo-font;
      font-size: 20px;
      padding: 0 10px;
      color: $link-color;
    }
  }
}
</style>