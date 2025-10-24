<script setup lang="ts">
interface ISlots {
  prepand: string,
  append: string,
}

defineSlots<ISlots>();
</script>

<template>
  <div>
    <slot name="prepand" v-if="$slots.prepand" />
    <slot name="append" v-if="$slots.append" />
  </div>
</template>