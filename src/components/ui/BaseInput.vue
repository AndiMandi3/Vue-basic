<script setup lang="ts">
type inputType = "text" | "email" | "password";

interface IProps {
  inputType: inputType,
  inputName: inputType,
  isValid: boolean,
  error?: string,
}

defineProps<IProps>();

const model = defineModel();
</script>

<template>
  <input
      v-model="model"
      :name="inputName"
      :class="[`base-input__${inputName}`, {'base-input--is-invalid': !isValid}]"
      :type="inputType"
      class="base-input"
  />
  <span v-if="error" class="base-input__error">{{ error }}</span>
</template>

<style scoped lang="scss">
.base-input {
  padding: 10px 0 0 0;
  border: none;
  border-bottom: 2px solid $gray-color;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: $accent-color;
  }

  &--is-invalid {
    border-color: $danger-color;
  }

  &__error {
    color: $danger-color;
  }

  &__password {
    padding-right: 32px;
  }
}
</style>