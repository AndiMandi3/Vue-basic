<script setup lang="ts">
import { useHumansStore } from "@/stores/useCounterStore.ts";

const humansStore = useHumansStore();

</script>

<template>
  <p>Я защищенная страница!</p>
</template>

<style scoped lang="scss">

</style>