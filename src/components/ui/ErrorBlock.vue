<script setup lang="ts">
import ExclamationIcon from "@/assets/images/exclamation-icon.svg?component";
</script>

<template>
  <div class="error-block">
    <div class="error-block__icon">
      <ExclamationIcon />
    </div>
    <div class="error-block__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-block {
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid $danger-color;
  padding: 20px;
  margin-bottom: 20px;
  background-color: $danger-background-color;
  
  &__content {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>