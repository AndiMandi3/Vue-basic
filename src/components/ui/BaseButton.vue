<script setup lang="ts">
interface AllowNames {
  type: 'login' | 'load-more';
}

defineProps<AllowNames>();

</script>

<template>
  <div class="button-wrapper">
    <button class="button-wrapper__action" :class="type">
      <slot />
    </button>
  </div>
</template>

<style scoped lang="scss">
.button-wrapper {
  &__action {
    padding: 10px 20px;
    background-color: $button-color;
    border: none;
    border-radius: 5px;
    color: $white;
    font-size: 16px;
    transition: 0.3s;
    &:hover{
      background-color: $link-color-hover;
    }
    &:active {
      background-color: $link-color-focus;
    }
  }
}
</style>