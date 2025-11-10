<script setup lang="ts">
import type { TUserPreview } from '@/types/userList.types';
import UserListItem from "@/pages/protectedPage/components/userListItem.vue";

interface IProps {
  data: TUserPreview[]
}

defineProps<IProps>();
</script>

<template>
  <div class="user-list">
    <div class="user-list__elements">
      <UserListItem v-for="(item, index) in data" :key="index" :item="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-list {
  &__elements {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

</style>