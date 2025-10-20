<script setup lang="ts">
import { ref, computed } from "vue";
import OpenedEyePasswordIcon from "@/assets/images/eye-show-icon.svg?component";
import ClosedEyePasswordIcon from "@/assets/images/eye-hidden-icon.svg?component";

type inputType = "text" | "email" | "password";

interface IProps {
  inputType: inputType,
  inputName: inputType,
  label?: string,
  error?: string,
}

const props = defineProps<IProps>();
const classInput = computed(() => "base-input__input-" + props.inputName);

const model = defineModel();

const isPasswordHidden = ref(true);
const fieldPassType = computed(() => props.inputName === "password" && isPasswordHidden.value ? "password" : "text");

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
      :class="[classInput, {'base-input__input--is-invalid': error}]"
      :type="fieldPassType"
    />

    <OpenedEyePasswordIcon v-if="isPasswordHidden && props.inputName === 'password'" class="base-input__password-eye--opened" @click="showPassVisibility" />
    <ClosedEyePasswordIcon v-else-if="props.inputName === 'password'" class="base-input__password-eye--closed" @click="hidePassVisibility" />

    <span v-if="error" class="base-input__input--error">{{ error }}</span>
  </div>
  
</template>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  position: relative;

  &__input {
    &-email, &-password {
      padding: 10px 0 0 0;
      border: none;
      border-bottom: 2px solid $gray-color;
      font-size: 16px;

      &:focus {
        outline: none;
        border-color: $accent-color;
      }
    }

    &--is-invalid {
      border-color: $danger-color;
    }

    &-password {
      display: flex;
      flex-direction: column;
      padding-right: 32px;
    }

    &--error {
      color: $danger-color;
    }
  }

  &__password-eye {
    &--closed, &--opened {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      padding: 4px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>