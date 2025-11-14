<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/stores/useUsersStore";
import ErrorBlock from "@/components/ui/ErrorBlock.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import UserCard from "@/pages/protectedPage/components/UserCard.vue";
import UsersLoader from "@/components/loaders/UsersLoader.vue";

const usersStore = useUsersStore();
const { users, isLoading, errorMessage } = storeToRefs(usersStore);
const { fetchUsers, resetUsers } = usersStore;

onMounted(fetchUsers);
onUnmounted(resetUsers);
</script>

<template>
  <div class="protected-page">
    <h2 class="protected-page__title">Защищенная страница</h2>

    <ErrorBlock v-if="errorMessage">
      {{ errorMessage }}
    </ErrorBlock>

    <div class="protected-page__content">
      <UsersLoader v-if="isLoading" :count=10 />
      <div v-else class="protected-page__users">
        <UserCard v-for="(user, index) in users" :key="index" :user="user" />
      </div>
    </div>

    <div class="protected-page__button">
      <BaseButton type="primary" :is-disabled="isLoading" @click="fetchUsers">
        Загрузить еще
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.protected-page {
  padding: 60px 100px;

  &__title {
    text-align: center;
    margin-bottom: 20px;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__users {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>