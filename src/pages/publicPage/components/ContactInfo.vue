<script setup lang="ts">
import ContactInfoItem from "@/pages/publicPage/components/ContactInfoItem.vue";
import CalendarIcon from "@/assets/images/calendar-icon.svg?component";
import EmailIcon from "@/assets/images/email-icon.svg?component";
import LocationIcon from "@/assets/images/location-icon.svg?component";
import PhoneIcon from "@/assets/images/phone-icon.svg?component";
import TelegramIcon from "@/assets/images/telegram-icon.svg?component";

const userData = [
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
];
</script>

<template>
  <div class="contact-info">
    <h2 class="contact-info__title">Личная информация пользователя</h2>

    <div class="contact-info__elements">
      <ContactInfoItem
          v-for="(item, index) in userData"
          :key="index"
          :value="item.value"
          class="contact-info__item"
      >
        <template #prepand>
          <component :is="item.component" class="contact-info__item-icon" />
        </template>

        <template v-if="item.isPriority" #append>
          <span class="contact-info__item-note"> — предпочитаемый способ связи</span>
        </template>
      </ContactInfoItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
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