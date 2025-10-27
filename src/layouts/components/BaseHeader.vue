<script setup lang="ts">
import { useRouter, RouterLink } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";
import { RouteName } from "@/consts/router.const.ts";
import useAuth from "@/composables/useAuth";

const { isAuth, setAuth } = useAuth();
const router = useRouter();

function handleAuthorize() {
  if(isAuth) setAuth(false);
  router.push({name: RouteName.LOGIN_PAGE});
}

</script>

<template>
  <header class="base-header">
    <div class="base-header__pages">
      <RouterLink class="base-header__link" exact-active-class="base-header__link--current" :to="{name: RouteName.PUBLIC_PAGE}">Public</RouterLink>
      <RouterLink class="base-header__link" exact-active-class="base-header__link--current" :to="{name: RouteName.PROTECTED_PAGE}">Protected</RouterLink>
    </div>
      <BaseButton type="secondary" @click="handleAuthorize">{{ !isAuth ? "Login" : "Logout" }}</BaseButton>
  </header>
</template>

<style scoped lang="scss">
.base-header {
  padding: 10px 20px;
  background-color: $accent-color;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;

  &__pages {
    display: flex;
    align-items: center;
  }

  &__link {
    font-size: 20px;
    padding: 0 10px;
    color: $white-color;

    &--current {
      color: $green-color;
    }
  }

  &__action {
    display: flex;
    align-items: center;
  }
}
</style>