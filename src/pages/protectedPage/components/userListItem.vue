<script setup lang="ts">
import type { TUserPreview } from '@/types/userList.types';
import AnonymousAvatar from "@/assets/images/anonymous-avatar-img.png";
import LineDivider from "@/pages/protectedPage/components/LineDivider.vue";
import CalendarIcon from "@/assets/images/calendar-icon.svg?component";
import LocationIcon from "@/assets/images/location-icon.svg?component";
import PhoneIcon from "@/assets/images/phone-icon.svg?component";

interface IProps {
  item: TUserPreview,
}

defineProps<IProps>();
</script>

<template>
  <div class="user-item">
    <div class="user-item__header">
      <img class="user-item__header-avatar" :src="item.mainInfo.thumbnail || AnonymousAvatar" alt="User avatar" loading="lazy">
      <h4 class="user-item__header-name">{{ item.mainInfo.name }}</h4>
    </div>

    <LineDivider />

    <div class="user-item__footer">
      <div class="user-item__footer-element" v-for="([key, value]) in Object.entries(item.extraInfo)" :key="key">
        <CalendarIcon v-if="key === 'birthday'" />
        <LocationIcon v-if="key === 'city'" />
        <PhoneIcon v-if="key === 'phone'" />
        {{ value }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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