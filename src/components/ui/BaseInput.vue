<script setup lang="ts">
interface IProps {
    inputType: "text" | "email" | "password",
    inputName: "text" | "email" | "password"
}

defineProps<IProps>();

const model = defineModel();
</script>

<template>
    <input v-model="model" :name="inputName" class="base-input" :class="inputName" :type="inputType" />
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