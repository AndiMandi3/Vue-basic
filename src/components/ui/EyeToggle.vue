<script setup lang="ts">

const isOpen = defineModel<boolean>();

function onChangeEye() {
  isOpen.value = !isOpen.value;
}

</script>

<template>
  <button
  type="button"
  class="eye-toggle">
    <OpenedEyePassword v-if="isOpen" class="eye-toggle__icon" @click="onChangeEye" />
    <ClosedEyePassword v-else class="eye-toggle__icon" @click="onChangeEye" />
  </button>
</template>

<style scoped lang="scss">

</style>