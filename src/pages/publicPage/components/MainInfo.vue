<script setup lang="ts">
import AnonymousAvatar from "@/assets/images/anonymous-avatar-img.png";
import UserAvatar from "@/assets/images/avatar-img.jpg";

interface IProps {
  username: string,
}

defineProps<IProps>();
</script>

<template>
  <div class="main-info">
    <img :src="UserAvatar || AnonymousAvatar" alt="Avatar image" class="main-info__avatar">
    <h3 class="main-info__fullname">{{ username }}</h3>
  </div>
</template>

<style scoped lang="scss">
.main-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  &__avatar {
    width: 10%;
    border-radius: 50%;
  }
}
</style>