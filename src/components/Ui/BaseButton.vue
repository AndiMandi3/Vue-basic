<script setup lang="ts">
defineProps({
  type: String
})
</script>

<template>
  <div class="button-wrapper">
    <RouterLink :class="type" :to="'login'"><slot /></RouterLink>
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
    color: $white;
    font-family: $header-font;
    font-size: 16px;
    transition: 0.3s;
    &:hover{
      background-color: $link-color-hover;
    }
    &:focus {
      background-color: $link-color-focus;
    }
  }
}
</style>