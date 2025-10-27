<script setup lang="ts">
interface ISlots {
  prepand(): any,
  append?(): any,
  default(): any,
}

interface IProps {
  value: string,
}

const slots = defineSlots<ISlots>();
defineProps<IProps>();
</script>

<template>
  <div>
    <slot name="prepand" />
    {{ value }}
    <slot name="append" />
  </div>
</template>
