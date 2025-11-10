<script setup lang="ts">
import MainInfo from "@/pages/publicPage/components/MainInfo.vue";
import LineDivider from "../components/common/LineDivider.vue";
import ContactInfo from "./publicPage/components/ContactInfo.vue";
</script>

<template>
  <div class="public-page">
    <h2 class="public-page__title">Публичная страница пользователя</h2>
    <div class="public-page__card">
      <MainInfo username="Димаков Андрей" />

      <LineDivider />

      <ContactInfo />
    </div>
  </div>
</template>

<style scoped lang="scss">
.public-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 150px;

  &__title {
    text-align: center;
    padding-bottom: 30px;
  }

  &__card {
    border: 1px solid $gray-color;
    padding: 20px 50px;
    border-radius: 30px;
  }
}
</style>