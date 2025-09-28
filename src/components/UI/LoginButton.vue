<script setup lang="ts">
import { ref } from "vue";

const loginState = ref('Login');
</script>

<template>
  <div class="button-wrapper">
    <RouterLink to="/">{{ loginState }}</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  align-items: center;
  a {
    padding: 10px 20px;
    background-color: $button-color;
    border: none;
    border-radius: 5px;
    color: white;
    font-family: $logo-font;
    font-size: 16px;
    transition: 0.3s;
    &:hover{
      background-color: $button-color-hover;
    }
    &:focus {
      background-color: $button-color-focus;
    }
  }
}
</style>