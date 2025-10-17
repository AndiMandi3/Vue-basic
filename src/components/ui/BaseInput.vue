<script setup lang="ts">
type inputType = "text" | "email" | "password";

interface IProps {
    inputType: inputType,
    inputName: inputType,
    isValid: boolean,
}

defineProps<IProps>();

const model = defineModel();
</script>

<template>
    <input v-model="model" :name="inputName" :class="{inputName, 'is-invalid': !isValid}" :type="inputType" class="base-input"  />
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

  &.is-invalid {
    border-color: $danger-color;
  }

  &.password {
    padding-right: 32px;
  }
}
</style>