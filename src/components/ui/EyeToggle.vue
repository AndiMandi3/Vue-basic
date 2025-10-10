<script setup lang="ts">
import { ref } from "vue";
import OpenedEyePassword from "@/assets/images/eye-password-show.svg?component";
import ClosedEyePassword from "@/assets/images/eye-password-hidden.svg?component";

interface IProps {
  type: "text" | "password",
};

defineProps<IProps>();



</script>

<template>
  <button
  type="button"
  class="eye-toggle">
  <OpenedEyePassword class="eye-toggle__icon"/>
  </button>
</template>

<style scoped lang="scss">
.eye-toggle {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>