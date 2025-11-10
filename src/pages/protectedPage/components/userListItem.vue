<script setup lang="ts">
interface ISlot {
  default(): any,
}

defineSlots<ISlot>();
</script>

<template>
  <slot />
</template>

<style scoped lang="scss">

</style>