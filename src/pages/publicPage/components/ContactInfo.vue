<script setup lang="ts">
import ContactInfoItem from "@/pages/publicPage/components/ContactInfoItem.vue";

type enterContent = {
  value: string;
  component: unknown;
  isPriority?: boolean;
}

interface IProps {
  content: enterContent[],
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="contact-info">
    <h2 class="contact-info__title">Личная информация пользователя</h2>

    <div class="contact-info__elements">
      <ContactInfoItem
          v-for="(item, index) in props.content"
          :key="index"
          :content="item.value"
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