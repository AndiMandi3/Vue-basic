<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
import { RouteName } from "@/consts/router.const.ts";
import useAuth from "@/helpers/useAuth.helper";

const { isAuth } = useAuth();
</script>

<template>
  <header class="base-header">
    <div class="base-header__pages">
      <RouterLink class="base-header__link" :to="{name: RouteName.PUBLIC_PAGE}">Public</RouterLink>
      <RouterLink class="base-header__link" :to="{name: RouteName.PROTECTED_PAGE}">Protected</RouterLink>
    </div>
      <RouterLink v-if="!isAuth" :to="{name: RouteName.LOGIN_PAGE}" class="base-header__action">
        <BaseButton type="secondary">Login</BaseButton>
      </RouterLink>
      <RouterLink v-else :to="{name: RouteName.LOGIN_PAGE}" class="base-header__action">
        <BaseButton type="secondary">Logout</BaseButton>
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
}
</style>