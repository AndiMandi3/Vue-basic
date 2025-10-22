<script setup lang="ts">
import { computed } from "vue";
import CalendarIcon from "@/assets/images/calendar-icon.svg?component";
import EmailIcon from "@/assets/images/email-icon.svg?component";
import LocationIcon from "@/assets/images/location-icon.svg?component";
import PhoneIcon from "@/assets/images/phone-icon.svg?component";
import TelegramIcon from "@/assets/images/telegram-icon.svg?component";

interface IProps {
  dateBirth?: string,
  email?: string,
  city?: string,
  phone?: string,
  telegramLink?: string,
  isEmailPriority?: boolean,
  isPhonePriority?: boolean,
  isTelegramPriority?: boolean,
}
const props = defineProps<IProps>();

const datas = computed(() => [
  {
    value: props.dateBirth,
    component: CalendarIcon,
    title: "Дата рождения",
    hasValue: !!props.dateBirth,
  },
  {
    value: props.email,
    component: EmailIcon,
    title: "Адрес электронной почты",
    isPriority: props.isEmailPriority,
    hasValue: !!props.email,
  },
  {
    value: props.city ? "г. " + props.city : undefined,
    component: LocationIcon,
    title: "Местонахождение",
    hasValue: !!props.city,
  },
  {
    value: props.phone,
    component: PhoneIcon,
    title: "Контактный номер телефона",
    isPriority: props.isPhonePriority,
    hasValue: !!props.phone,
  },
  {
    value: props.telegramLink,
    component: TelegramIcon,
    title: "Ссылка на Telegram-аккаунт",
    isPriority: props.isTelegramPriority,
    hasValue: !!props.telegramLink,
  },
].filter(item => item.hasValue));

const hasAnyData = computed(() => {
  return !!(props.dateBirth || props.email || props.city || props.phone || props.telegramLink);
});

const isPriorityClass = computed(() => ({"contact-info__item-note": props.isTelegramPriority || props.isPhonePriority || props.isEmailPriority}))
</script>

<template>
  <div class="contact-info">
    <h2 class="contact-info__title">Личная информация пользователя</h2>

    <div v-if="hasAnyData" class="contact-info__elements">
      <div
          v-for="item in datas"
          :key="item.title"
          class="contact-info__item"
      >
        <component
            :is="item.component"
            :title="item.title"
            class="contact-info__item-icon"
        />
        <p class="contact-info__item-text">{{ item.value || 'Не указано' }}</p>
        <span
            v-if="item.isPriority"
            :class="isPriorityClass"
        > — предпочитаемый способ связи</span>
      </div>
    </div>
    <div v-else class="contact-info__elements-empty">
      <p class="contact-info__elements-empty-text">Пользователь не указал данных</p>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    gap: 10px;

    &-note {
      font-weight: $bold-font;
    }
  }
}
</style>