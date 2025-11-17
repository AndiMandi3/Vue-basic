<script setup lang="ts">
import type { TUserPreview } from '@/types/userList.types';
import AnonymousAvatar from "@/assets/images/anonymous-avatar-img.png";
import LineDivider from "@/components/common/LineDivider.vue";
import CalendarIcon from "@/assets/images/calendar-icon.svg?component";
import LocationIcon from "@/assets/images/location-icon.svg?component";
import PhoneIcon from "@/assets/images/phone-icon.svg?component";

interface IProps {
  user: TUserPreview,
}

defineProps<IProps>();
</script>

<template>
  <div class="user-card">
    <div class="user-card__header">
      <img class="user-card__avatar" :src="user.avatar || AnonymousAvatar" alt="User avatar" loading="lazy">
      <div class="user-card__name">{{ user.name }}</div>
    </div>

    <LineDivider />

    <div class="user-card__info">
      <div class="user-card__element">
        <CalendarIcon />
        <p>{{ user.birthday }}</p>
      </div>
      <div class="user-card__element">
        <LocationIcon />
        <p>{{ user.city }}</p>
      </div>
      <div class="user-card__element">
        <PhoneIcon />
        <p>{{ user.phone }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-card {
  display: flex;
  flex-grow: 1;
  border: 1px solid $gray-color;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;

  &__header {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__name {
    font-weight: $bold-font;
  }

  &__avatar {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }

  &__info {
    display: flex;
    gap: 20px;
    padding: 20px 0;
  }

  &__element {
    display: flex;
    gap: 10px;
  }
}
</style>