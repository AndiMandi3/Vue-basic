<script setup lang="ts">
import { ContentLoader } from "vue-content-loader";

interface IProps {
  items: number,
}

defineProps<IProps>();
</script>

<template>
  <div class="users-loader">
    <ContentLoader v-for="item in items" :key="item" :width="842.5" :height="167" :speed="2" class="users-loader__item">
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
</template>

<style scoped lang="scss">
.users-loader {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  &__item {
    display: flex;
    flex-grow: 1;
    width: 100%;
    border: 1px solid $gray-color;
    border-radius: 10px;
    margin-bottom: 20px;
  }
}
</style>