<script setup lang="ts">
import ExclamationIcon from "@/assets/images/exclamation-icon.svg?component";
</script>

<template>
  <div class="error-block">
    <ExclamationIcon class="error-block__icon" />
    <span class="error-block__text">
      <slot />
    </span>
  </div>
</template>

<style scoped lang="scss">
.error-block {
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid;
  padding: 20px;
  margin-bottom: 20px;
  background-color: $danger-background-color;
  border-color: $danger-color;

  &__icon {
    flex-shrink: 0;
  }

  &__text {
    flex: 1;
    text-align: center;
  }
}
</style>