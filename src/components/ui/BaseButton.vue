<script setup lang="ts">
interface IProps {
  type: "primary" | "secondary" | "success" | "danger" | "warning" | "muted",
  isDisable?: true | false
}

defineProps<IProps>();
</script>

<template>
  <button class="base-button" :class="type" :disabled="isDisable">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 10px 20px;
  background-color: $green-color;
  border: none;
  border-radius: 5px;
  color: $white-color;
  font-size: 16px;
  transition: 0.3s;

  &.primary {
    background-color: $accent-color;
  }

  &.secondary {
    background-color: $green-color;
  }

  &.success {
    background-color: $accent-color;
  }

  &.danger {
    background-color: $danger-color;
  }

  &.warning {
    background-color: $warning-color;
  }

  &.muted {
    background-color: $disable-color;
  }

  &:disabled {
    background-color: $disable-color;
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }

  &:hover{
    opacity: 50%;
  }

  &:active {
    opacity: 75%;
  }
}

</style>