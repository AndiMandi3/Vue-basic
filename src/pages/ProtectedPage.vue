<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/stores/useUsersStore";
import BaseBlock from "@/components/ui/BaseBlock.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import UserList from "./protectedPage/components/userList.vue";

const usersStore = useUsersStore();
const { users, isLoading, errorMessage } = storeToRefs(usersStore);
const { fetchUsers, resetUsers } = usersStore;

onMounted(fetchUsers);
onUnmounted(resetUsers);
</script>

<template>
  <div class="protected-page">
    <h2 class="protected-page__title">Защищенная страница</h2>
    <BaseBlock type="error" v-if="errorMessage">
      {{ errorMessage }}
    </BaseBlock>
    
    <UserList :data="users" />

    <div class="protected-page__button">
      <BaseButton type="primary" :is-disabled="isLoading" @click="fetchUsers">
        Загрузить еще
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.protected-page {
  padding: 60px 20px;

  &__title {
    text-align: center;
    margin-bottom: 20px;
  }

  &__button {
    text-align: end;
  }
}
</style>