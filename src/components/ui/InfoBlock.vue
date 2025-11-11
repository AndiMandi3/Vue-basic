<script setup lang="ts">
import InfoIcon from "@/assets/images/info-icon.svg?component";
</script>

<template>
  <div class="info-block">
    <InfoIcon />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-block {
  display: flex;
  align-items: center;
  gap: 45%;
  border-radius: 10px;
  border: 2px solid;
  padding: 20px;
  margin-bottom: 20px;
  
  &--error {
    background-color: $danger-background-color;
    border-color: $danger-color;
  }

  &--info {
    background-color: $info-background-color;
    border-color: $info-color;
  }
}
</style>