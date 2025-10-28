<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/stores/useUsersStore";

const usersStore = useUsersStore();
const { users, isLoading, errorMessage } = storeToRefs(usersStore);
const { fetchUsers, loadMoreUsers } = usersStore;

onMounted(async () => {
  fetchUsers();
})
</script>

<template>
  <p>Я защищенная страница!</p>
</template>

<style scoped lang="scss">

</style>