<script setup lang="ts">
import type { TUserPreview } from '@/types/userList.types';
import AnonymousAvatar from "@/assets/images/anonymous-avatar-img.png";
import LineDivider from "@/pages/protectedPage/components/LineDivider.vue";
import UserListItem from "@/pages/protectedPage/components/userListItem.vue";

interface IProps {
  data: TUserPreview[]
}

defineProps<IProps>();
</script>

<template>
  <div class="user-list">
    <div class="user-list__elements">
      <UserListItem v-for="(item, index) in data" :key="index">
        <div class="user-item">
          <div class="user-item__header">
            <img class="user-item__header-avatar" :src="item.mainInfo.thumbnail.value || AnonymousAvatar" alt="" loading="lazy">
            <h4 class="user-item__header-name">{{ item.mainInfo.name.value }}</h4>
          </div>

          <LineDivider />

          <div class="user-item__footer">
            <div class="user-item__footer-element" v-for="([key, info]) in Object.entries(item.extraInfo)" :key="key">
              <component :is="info.component" />
              {{ info.value }}
            </div>
          </div>
        </div>
      </UserListItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-list {
  &__elements {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

.user-item {
  display: flex;
  border: 1px solid $gray-color;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;

  &__header {
    display: flex;
    align-items: center;
    gap: 20px;

    &-avatar {
      border-radius: 50%;
      width: 48px;
      height: 48px;
    }
  }

  &__footer {
    display: flex;
    gap: 20px;
    padding: 20px 0;
  }
}
</style>