<script setup lang="ts">
import { computed } from "vue";
import MainInfo from "@/pages/publicPage/components/MainInfo.vue";
import LineDivider from "./publicPage/components/LineDivider.vue";
import CalendarIcon from "@/assets/images/calendar-icon.svg?component";
import EmailIcon from "@/assets/images/email-icon.svg?component";
import LocationIcon from "@/assets/images/location-icon.svg?component";
import PhoneIcon from "@/assets/images/phone-icon.svg?component";
import TelegramIcon from "@/assets/images/telegram-icon.svg?component";
import ContactInfo from "./publicPage/components/ContactInfo.vue";
import avatarFromServer from "@/assets/images/avatar-img.jpg";

const data = computed(() => [
  {
    value: "04.04.2003",
    component: CalendarIcon,
  },
  {
    value: "Andre200344@bk.ru",
    component: EmailIcon,
  },
  {
    value: "Г. Новосибирск",
    component: LocationIcon,
  },
  {
    value: "+7 (999)-464-85-91",
    component: PhoneIcon,
    isPriority: true,
  },
  {
    value: "https://t.me/andimandi03",
    component: TelegramIcon,
  },
]);

</script>

<template>
  <div class="public-page">
    <h2 class="public-page__title">Публичная страница пользователя</h2>
    <div class="public-page__card">
      <MainInfo username="Димаков Андрей" :avatar="avatarFromServer" />

      <LineDivider />

      <div class="contact-info">
        <h2 class="contact-info__title">Личная информация пользователя</h2>

        <div class="contact-info__elements">
          <ContactInfo v-for="(item, index) in data" :key="index" class="contact-info__item">
            <template #prepand>
              <component :is="item.component" class="contact-info__item-icon" />
              <p class="contact-info__item-text">{{ item.value }}</p>
            </template>
            <template v-if="item.isPriority" #append>
              <span class="contact-info__item-note"> — предпочитаемый способ связи</span>
            </template>
          </ContactInfo>
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
  }
}

.contact-info {
  padding: 20px 0;

  &__title {
    text-align: center;
  }

  &__elements {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    &-empty {
      padding: 20px 0;
      display: flex;
      justify-content: center;

      &-text {
        font-weight: $bold-font;
      }
    }
  }

  &__item {
    display: flex;
    flex: 1 1 49%;
    gap: 10px;

    &-note {
      font-weight: $bold-font;
    }
  }
}
</style>