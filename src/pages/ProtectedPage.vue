<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/stores/useUsersStore";
import { ContentLoader } from "vue-content-loader";
import ErrorBlock from "@/components/ui/ErrorBlock.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import UserListItem from "@/pages/protectedPage/components/UserListItem.vue";

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

    <div class="user-list">
      <div v-if="isLoading" class="skeleton-list">
        <ContentLoader v-for="n in 10" :key="n" :width="842.5" :height="167" :speed="2" class="skeleton-list__item">
          <circle cx="40" cy="48" r="24" />
          <rect x="85" y="40" rx="4" ry="4" width="200" height="20" />

          <rect x="21" y="90" rx="2" ry="2" width="800" height="1" />

          <rect x="21" y="110" rx="4" ry="4" width="16" height="16" />
          <rect x="48" y="110" rx="3" ry="3" width="110" height="16" />

          <rect x="175" y="110" rx="4" ry="4" width="16" height="16" />
          <rect x="202" y="110" rx="3" ry="3" width="135" height="16" />

          <rect x="356" y="110" rx="4" ry="4" width="16" height="16" />
          <rect x="383" y="110" rx="3" ry="3" width="120" height="16" />
        </ContentLoader>
      </div>
      <div v-else class="user-list__elements">
        <UserListItem v-for="(item, index) in users" :key="index" :item="item" />
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
}

.skeleton-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  &__item {
    border: 1px solid $gray-color;
    border-radius: 10px;
    margin-bottom: 20px;
  }
}

.user-list {
  &__elements {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>