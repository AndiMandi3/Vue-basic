<script setup lang="ts">
import MainInfo from "@/pages/publicPage/components/MainInfo.vue";
import LineDivider from "./publicPage/components/LineDivider.vue";
import ContactInfo from "@/pages/publicPage/components/ContactInfo.vue";
</script>

<template>
  <div class="public-page">
    <h2 class="public-page__title">Публичная страница пользователя</h2>
    <div class="public-page__card">
      <MainInfo username="Димаков Андрей" :have-avatar="true" />

      <LineDivider />

      <ContactInfo
          email="Andre200344@bk.ru"
          date-birth="04.04.2003"
          city="Новосибирск"
          phone="+7 (999)-464-85-91"
          telegramLink="https://t.me/andimandi03"
          :is-telegram-priority="true"
      />
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