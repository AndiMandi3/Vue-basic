<script setup lang="ts">

interface ISlots {
  prepand(): any,
  append(): any,
  default(): any
}

const slots = defineSlots<ISlots>();
</script>

<template>
  <div>
    <slot name="prepand" v-if="slots.prepand" />
    <slot />
    <slot name="append" v-if="slots.append" />
  </div>
</template>