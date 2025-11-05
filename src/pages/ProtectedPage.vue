<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/stores/useUsersStore";

const usersStore = useUsersStore();
const { users, isLoading, errorMessage } = storeToRefs(usersStore);
const { fetchUsers, resetUsers } = usersStore;

onMounted(async () => fetchUsers());
onUnmounted(() => resetUsers());
</script>

<template>
  <div class="protected-page">
    <p>Я защищенная страница!</p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p>Число загруженных людей: {{ users.length }}</p>
    <p>Загружается? <strong>{{ isLoading ? "Да" : "Нет" }}</strong></p>
    <button type="button" :disabled="isLoading" @click="fetchUsers">Загрузить еще</button>
  </div>
</template>

<style scoped lang="scss">
.protected-page {
  padding: 60px 20px;
}
</style>