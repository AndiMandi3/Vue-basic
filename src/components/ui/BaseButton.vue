<script setup lang="ts">
interface IProps {
  type: "primary" | "secondary" | "success" | "danger" | "warning" | "muted";
}

defineProps<IProps>();

</script>

<template>
  <button class="base-button" :class="type">
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

  &:hover{
    background-color: $green-color-hover;
  }

  &:active {
    background-color: $green-color-focus;
  }
}

.primary, .secondary, .success, .danger, .warning, .muted {
  margin-top: 10px;
}

.primary {
  background-color: $accent-color;
}

.secondary {
  background-color: $green-color;
}

.success {
  background-color: $accent-color;
}

.danger {
  background-color: $danger-color;
}

.warning {
  background-color: $warning-color;
}

.muted {
  background-color: $disable-color;
}
</style>