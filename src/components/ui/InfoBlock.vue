<script setup lang="ts">
import InfoIcon from "@/assets/images/info-icon.svg?component";
</script>

<template>
  <div class="info-block">
    <InfoIcon class="info-block__icon" />
    <p class="info-block__text">
      <slot />
    </p>
  </div>
</template>

<style scoped lang="scss">
.info-block {
  display: flex;
  border-radius: 10px;
  border: 2px solid;
  padding: 20px;
  margin-bottom: 20px;

  &__icon {
    flex-shrink: 0;
  }

  &__text {
    flex: 1;
  }
}
</style>