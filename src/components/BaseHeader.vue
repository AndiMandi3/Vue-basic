<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
import LogoForHeader from "@/components/ui/LogoForHeader.vue";
import { ERouteName } from "@/routeNames.ts";
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <LogoForHeader :sizeLogo="150"/>
      <p class="header__logo-name">Vue basic</p>
    </div>
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
  &__logo {
    display: flex;
    width: 300px;
    height: 150px;
    align-items: center;
    &-name {
      font-size: 28px;
      color: $white;
    }
  }
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