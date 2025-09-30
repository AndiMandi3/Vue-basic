<script setup lang="ts">
import LoginButton from "@/components/Ui/BaseButton.vue";
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <svg viewBox="0 0 261.76 226.69">
        <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
          <g transform="translate(178.06 235.01)">
            <path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/>
          </g>
          <g transform="translate(178.06 235.01)">
            <path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/>
          </g>
        </g>
      </svg>
      <p class="header__logo-name">Vue basic</p>
    </div>
    <div class="header__pages">
      <RouterLink :to="'public'">Public</RouterLink>
      <RouterLink :to="'protected'">Protected</RouterLink>
    </div>
    <LoginButton type="login">Login</LoginButton>
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
    svg {
      width: 150px;
    }
    &-name {
      font-family: $header-font;
      font-size: 28px;
      color: $white;
    }
  }
  &__pages {
    display: flex;
    align-items: center;
    a {
      font-family: $header-font;
      font-size: 20px;
      padding: 0 10px;
      color: $link-color;
    }
  }
}
</style>