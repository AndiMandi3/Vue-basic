<script setup lang="ts">
import CalendarIcon from "@/assets/images/calendar-icon.svg?component";
import EmailIcon from "@/assets/images/email-icon.svg?component";
import LocationIcon from "@/assets/images/location-icon.svg?component";
import PhoneIcon from "@/assets/images/phone-icon.svg?component";
import TelegramIcon from "@/assets/images/telegram-icon.svg?component";
</script>

<template>
  <div class="public-page">
    <h2 class="public-page__title">Публичная страница пользователя</h2>

    <div class="public-page__card">
      
      <div class="public-page__brief-info">
        <img src="@/assets/images/avatar-img.jpg" alt="Avatar image" class="public-page__brief-info-avatar">
        <h3 class="public-page__brief-info-fullname">Димаков Андрей</h3>
      </div>

      <div class="public-page__card-divider"></div>

      <div class="public-page__contact">
        <h2 class="public-page__contact-title">Личная информация пользователя</h2>
        <div class="public-page__contact-elements">

          <div class="public-page__contact-item">
            <CalendarIcon class="public-page__contact-item-icon" title="Дата рождения" />
            <p class="public-page__contact-item-text">04.04.2003</p>
          </div>

          <div class="public-page__contact-item">
            <EmailIcon class="public-page__contact-icon" title="Электронная почта" />
            <a href="mailto:Andre200344@bk.ru" class="public-page__contact-item-text--is-link public-page__contact-item-text">Andre200344@bk.ru</a>
          </div>

          <div class="public-page__contact-item">
            <LocationIcon class="public-page__contact-item-icon" title="Местонахождение" />
            <p class="public-page__contact-item-text">г. Новосибирск</p>
          </div>

          <div class="public-page__contact-item">
            <PhoneIcon class="public-page__contact-item-icon" title="Контактный телефон" />
            <a href="tel:+79994648591" class="public-page__contact-item-text public-page__contact-item-text--is-link">+7 (999)-464-85-91</a>
            <span class="public-page__contact-item-note"> — предпочитаемый способ связи</span>
          </div>

          <div class="public-page__contact-item">
            <TelegramIcon class="public-page__contact-item-icon" title="Telegram-аккаунт" />
            <a href="https://t.me/andimandi03" class="public-page__contact-item-text--is-link public-page__contact-item-text">https://t.me/andimandi03</a>
          </div>
        </div>
      </div>
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

    &-divider {
      padding: 10px 0;
      border-bottom: 1px solid $gray-color;
    }
  }

  &__brief-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    &-avatar {
      width: 10%;
      border-radius: 50%;
    }
  }

  &__contact {
    padding: 20px 0;

    &-title {
      text-align: center;
    }

    &-elements {
      padding-top: 30px; 
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    &-item {
      display: flex;
      flex-direction: row;
      gap: 10px;

      &-text--is-link {
        color: $accent-color;
      }

      &-note {
        font-weight: 700;
      }
    }
  }
}
</style>