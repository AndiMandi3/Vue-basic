<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
import { ERouteName } from "@/consts/routeNames.const.ts";
</script>

<template>
  <header class="header">
    <div class="header__pages">
      <RouterLink class="header__pages-link" :to="{name: ERouteName.PUBLIC_PAGE}">Public</RouterLink>
      <RouterLink class="header__pages-link" :to="{name: ERouteName.PROTECTED_PAGE}">Protected</RouterLink>
    </div>
      <RouterLink :to="{name: ERouteName.LOGIN_PAGE}" class="header__button-action">
        <BaseButton type="login">Login</BaseButton>
      </RouterLink>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 10px 20px;
  background-color: $accent-color;
  display: flex;
  justify-content: space-between;

  &__pages {
    display: flex;
    align-items: center;
    &-link {
      font-size: 20px;
      padding: 0 10px;
      color: $link-color;
    }
  }

  &__button-action {
    display: flex;
    align-items: center;
  }
}
</style>