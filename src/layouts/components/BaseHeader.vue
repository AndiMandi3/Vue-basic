<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
import { RouteConfig } from "@/consts/router.const.ts";
</script>

<template>
  <header class="base-header">
    <div class="base-header__pages">
      <RouterLink class="base-header__link" :to="{name: RouteConfig.PUBLIC_PAGE.name}">Public</RouterLink>
      <RouterLink class="base-header__link" :to="{name: RouteConfig.PROTECTED_PAGE.name}">Protected</RouterLink>
    </div>
      <RouterLink :to="{name: RouteConfig.LOGIN_PAGE.name}" class="base-header__action">
        <BaseButton type="secondary">Login</BaseButton>
      </RouterLink>
  </header>
</template>

<style scoped lang="scss">
.base-header {
  padding: 10px 20px;
  background-color: $accent-color;
  display: flex;
  justify-content: space-between;

  &__pages {
    display: flex;
    align-items: center;
  }

  &__link {
    font-size: 20px;
    padding: 0 10px;
    color: $white-color;
  }

  &__action {
    display: flex;
    align-items: center;
  }
  .secondary {
    margin: 0;
  }
}
</style>