<script setup lang="ts">
import LoginForm from "@/components/forms/LoginForm.vue";
</script>

<template>
  <div class="login-page">
    <h1 class="login-page__title">Authorization</h1>
    <LoginForm />
  </div>
</template>

<style scoped lang="scss">
.login-page {
  margin: auto;
  display: grid;
  place-items: center;
  gap: 16px;
  padding: 24px;

  &__title {
    text-align: center;
  }
}
</style>