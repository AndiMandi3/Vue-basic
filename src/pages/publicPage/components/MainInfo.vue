<script setup lang="ts">
import AnonymousAvatar from "@/assets/images/anonymous-avatar-img.png";

interface IProps {
  username: string,
  avatar: string,
}

const props = defineProps<IProps>();

</script>

<template>
  <div class="main-info">
    <img :src="props.avatar || AnonymousAvatar" alt="Avatar image" class="main-info__avatar">
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