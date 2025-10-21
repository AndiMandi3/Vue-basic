<script setup lang="ts">

</script>

<template>
  <div class="public-page">
    <h2 class="public-page__title">Публичная страница пользователя</h2>
    <div class="public-page__card">
      <div class="public-page__card-brief-info">
        <img src="../assets/images/avatar-img.jpg" alt="Avatar image" class="public-page__card-brief-info-avatar">
        <h3 class="public-page__card-brief-info-fullname">Димаков Андрей Владиславович</h3>
      </div>
      <div class="public-page__card-line"></div>
      <div class="public-page__card-contact">
        <h2 class="public-page__card-contact-title">Личная информация пользователя:</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.public-page {
  padding: 50px 150px;

  &__title {
    text-align: center;
    padding-bottom: 30px;
  }

  &__card {
    border: 1px solid $gray-color;
    padding: 20px 50px;
    border-radius: 30px;

    &-brief-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;

      &-avatar {
        width: 10%;
        border-radius: 50%;
      }
    }

    &-line {
      padding: 10px 0;
      border-bottom: 1px solid $gray-color;
    }

    &-contact {
      padding: 20px 0;

      &-title {
        text-align: center;
      }
    }
  }
}
</style>