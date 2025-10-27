<script setup lang="ts">
interface ISlots {
  prepand(): any,
  append?(): any,
}

interface IProps {
  value: string,
}

const slots = defineSlots<ISlots>();
defineProps<IProps>();
</script>

<template>
  <div>
    <slot name="prepand" class="contact-item" />
    {{ value }}
    <slot name="append" />
  </div>
</template>

<style scoped lang="scss">
.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>