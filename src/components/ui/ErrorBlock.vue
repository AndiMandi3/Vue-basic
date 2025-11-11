<script setup lang="ts">
import ExclamationIcon from "@/assets/images/exclamation-icon.svg?component";
</script>

<template>
  <div class="error-block">
    <ExclamationIcon />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.error-block {
  display: flex;
  align-items: center;
  gap: 45%;
  border-radius: 10px;
  border: 2px solid;
  padding: 20px;
  margin-bottom: 20px;
  background-color: $danger-background-color;
  border-color: $danger-color;
}
</style>