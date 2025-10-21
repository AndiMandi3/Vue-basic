<script setup lang="ts">
import { ref, computed } from "vue";
import OpenedEyePasswordIcon from "@/assets/images/eye-show-icon.svg?component";
import ClosedEyePasswordIcon from "@/assets/images/eye-hidden-icon.svg?component";

interface IProps {
  inputType: "text" | "email" | "password",
  inputName: string,
  label?: string,
  error?: string,
}

const props = defineProps<IProps>();

const inputClasses = computed(() => [
  `base-input__input--${props.inputName}`, 
  {'base-input__input--is-invalid': !!props.error}
]);

const model = defineModel<string>();

const isPasswordHidden = ref(true);

const isPasswordField = computed(() => props.inputName === "password");
const fieldPassType = computed(() => isPasswordField.value && isPasswordHidden.value ? "password" : "text");

function showPassVisibility() {
  isPasswordHidden.value = false;
}

function hidePassVisibility() {
  isPasswordHidden.value = true;
}
</script>

<template>
  <div class="base-input">
    <div v-if="props.label">{{ props.label }}</div>
    <input
      v-model="model"
      :name="inputName"
      class="base-input__input"
      :class="inputClasses"
      :type="fieldPassType"
    />
    <template v-if="isPasswordField">
      <OpenedEyePasswordIcon v-if="isPasswordHidden" class="base-input__password-eye" :class="{'base-input__password-eye--open': isPasswordHidden}" @click="showPassVisibility" />
      <ClosedEyePasswordIcon v-else class="base-input__password-eye" :class="{'base-input__password-eye--closed': !isPasswordHidden}" @click="hidePassVisibility" />
    </template>
    <span v-if="error" class="base-input__error">{{ error }}</span>
  </div>
  
</template>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  position: relative;

  &__input {
    padding: 10px 0 0 0;
    border: none;
    border-bottom: 2px solid $gray-color;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: $accent-color;
    }

    &--password {
      display: flex;
      flex-direction: column;
      padding-right: 32px;
    }

    &--is-invalid {
      border-color: $danger-color;
    }
  }

  &__error {
    color: $danger-color;
  }

  &__password-eye {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    padding: 4px;
    width: 30px;
    height: 30px;
  }
}
</style>