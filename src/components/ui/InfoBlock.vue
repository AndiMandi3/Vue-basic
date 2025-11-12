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
.info-block {
  display: flex;
  align-items: center;
  gap: 730px;
  border-radius: 10px;
  border: 2px solid;
  padding: 20px;
  margin-bottom: 20px;
}
</style>