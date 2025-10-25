<script setup lang="ts">
interface ISlots {
  prepand(): any,
  append(): any,
  default(): any
}

interface IProps {
  value: string,
}

const slots = defineSlots<ISlots>();
const props = defineProps<IProps>();
</script>

<template>
  <div>
    <slot name="prepand" v-if="slots.prepand" />
    {{props.value}}
    <slot name="append" v-if="slots.append" />
  </div>
</template>

<style scoped lang="scss">

</style>