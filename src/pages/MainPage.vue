<template>
  <HeaderPage />
  <h1>Главная страница</h1>
  <BaseButton @click="onClick">
    Нажато {{ counterStore.count }} раз
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { useCounterStore } from "@/stores/useCounterStore.ts";
import HeaderPage from "@/components/HeaderPage.vue";

const counterStore = useCounterStore();

function onClick() {
  counterStore.increment();
}
</script>