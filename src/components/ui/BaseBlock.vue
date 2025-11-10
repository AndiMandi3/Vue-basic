<script setup lang="ts">
import { computed } from "vue";
import ExclamationIcon from "@/assets/images/exclamation-icon.svg?component";
import InfoIcon from "@/assets/images/info-icon.svg?component";

interface IProps {
  type: "error" | "info",
}

const props = defineProps<IProps>();

const isErrorType = computed(() => props.type === "error");
</script>

<template>
  <div class="base-block" :class="`base-block--${props.type}`">
    <ExclamationIcon v-if="isErrorType" />
    <InfoIcon v-if="!isErrorType" />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-block {
  display: flex;
  align-items: center;
  gap: 45%;
  border-radius: 10px;
  border: 2px solid;
  padding: 20px;
  margin-bottom: 20px;
  
  &--error {
    background-color: $danger-background-color;
    border-color: $danger-color;
  }

  &--info {
    background-color: $info-background-color;
    border-color: $info-color;
  }
}
</style>