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
      <img class="user-card__header-avatar" :src="user.avatar || AnonymousAvatar" alt="User avatar" loading="lazy">
      <h4 class="user-card__header-name">{{ user.name }}</h4>
    </div>

    <LineDivider />

    <div class="user-card__footer">
      <div class="user-card__footer-element">
        <CalendarIcon />
        <p>{{ user.birthday }}</p>
      </div>
      <div class="user-card__footer-element">
        <LocationIcon />
        <p>{{ user.city }}</p>
      </div>
      <div class="user-card__footer-element">
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
  max-width: 842.5px;
  width: 100%;
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

    &-element {
      display: flex;
      gap: 10px;
    }
  }
}
</style>