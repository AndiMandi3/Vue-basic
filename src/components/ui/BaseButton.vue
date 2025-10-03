<script setup lang="ts">
interface IProps {
  type: "login" | "load-more";
}

defineProps<IProps>();

</script>

<template>
  <button class="base-button" :class="type">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 10px 20px;
  background-color: $green-color;
  border: none;
  border-radius: 5px;
  color: $white-color;
  font-size: 16px;
  transition: 0.3s;

  &:hover{
    background-color: $green-color-hover;
  }

  &:active {
    background-color: $green-color-focus;
  }
}
</style>