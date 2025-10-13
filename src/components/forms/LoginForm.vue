<script setup lang="ts">
import { computed, ref } from "vue";
import { useCounterStore } from "@/stores/useCounterStore.ts";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import CookieHelper from "@/classes/cookieHelper.class"
import * as zod from "zod";

import BaseButton from "@/components/ui/BaseButton.vue";

import OpenedEyePassword from "@/assets/images/eye-password-show.svg?component";
import ClosedEyePassword from "@/assets/images/eye-password-hidden.svg?component";
import { router } from "@/router";

const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, { message: "Это обязательное поле" }).email({ message: "Некорректный E-mail" }),
      password: zod.string().min(1, { message: "Это обязательное поле" }).min(8, { message: "Пароль должен быть минимум 8 символов" }),
    })
);

const storeCounter = useCounterStore();

const { handleSubmit, errors, meta } = useForm({ validationSchema });

const { value: email, meta: emailMeta } = useField('email');
const { value: password, meta: passwordMeta } = useField('password');

const onSubmit = handleSubmit(() => {
  CookieHelper.setCookie('isAuth', "true", 1)
  router.push('/public');
});

const isOpenEye = ref(true);
const fieldPassType = computed(() => isOpenEye.value ? 'password' : 'text');

function onChangePassVisibility() {
  isOpenEye.value = !isOpenEye.value;
}


</script>

<template>
  <form class="login-form" @submit="onSubmit">

    <div class="login-form__input">
      <div>E-Mail:</div>
      <input
        v-model="email"
        name="email"
        class="login-form__input-email"
        type="email"
        :class="{'is-invalid': !emailMeta.valid}"
      />
      <span class="login-form__error">{{ errors.email }}</span>
    </div>

    <div class="login-form__input">
      <div>Password:</div>
      <input
        v-model="password"
        :type="fieldPassType"
        name="password"
        class="login-form__input-password"
        :class="{'is-invalid': !passwordMeta.valid}"
      />
      <span class="login-form__error">{{ errors.password }}</span>

      <OpenedEyePassword v-if="isOpenEye" class="login-form__password-eye" @click="onChangePassVisibility" />
      <ClosedEyePassword v-else class="login-form__password-eye" @click="onChangePassVisibility" />
    </div>

    <BaseButton
      :disabled="!meta.valid"
      type="primary"
    >
      Login
    </BaseButton>
  </form>
  <button @click="() => storeCounter.increment()">
    {{ storeCounter.count }}
  </button>

</template>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__input {
    display: flex;
    flex-direction: column;
    position: relative;

    &-email, &-password {
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
    }

    &-password {
      padding-right: 32px;
    }
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

  &__error {
    color: $danger-color;
  }

  &__submit {
    font-size: 16px;
    padding: 10px;
    background-color: $accent-color;
    color: $white-color;
    border: none;
    border-radius: 5px;
    transition: 0.3s;

    &:hover{
      background-color: $green-color-hover;
    }

    &:active {
      background-color: $green-color-focus;
    }
  }
}
</style>