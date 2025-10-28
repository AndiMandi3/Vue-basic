<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/stores/useUsersStore";

const usersStore = useUsersStore();
const { users, isLoading, errorMessage } = storeToRefs(usersStore);
const { fetchUsers, loadMoreUsers } = usersStore;

fetchUsers();

</script>

<template>
  <p>Я защищенная страница!</p>
</template>

<style scoped lang="scss">

</style>