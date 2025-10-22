<script setup lang="ts">
import { computed } from "vue";
import customAvatar from "@/assets/images/avatar-img.jpg";
import AnonymousAvatar from "@/assets/images/anonymous-avatar.png";

interface IProps {
  username: string,
  haveAvatar: boolean,
}
const props = defineProps<IProps>();

const isUserAvatar = computed<string>(() => props.haveAvatar ? customAvatar : AnonymousAvatar);
</script>

<template>
  <div class="main-info">
    <img :src="isUserAvatar" alt="Avatar image" class="main-info__avatar">
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