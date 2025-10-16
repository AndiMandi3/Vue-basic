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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  &__title {
    text-align: center;
  }
}
</style>