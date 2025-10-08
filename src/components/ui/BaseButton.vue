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

.primary {
  background-color: $accent-color;
  margin-top: 10px;
}

.secondary {
  background-color: $green-color;
  margin-top: 10px;
}

.success {
  background-color: $accent-color;
  margin-top: 10px;
}

.danger {
  background-color: $danger-color;
  margin-top: 10px;
}

.warning {
  background-color: $warning-color;
  margin-top: 10px;
}

.muted {
  background-color: $disable-color;
  margin-top: 10px;
}
</style>