<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router"
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { RouteName } from "@/consts/router.const.ts";
import useAuth from "@/composibles/useAuth.composible"
import * as zod from "zod";

import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";

import OpenedEyePassword from "@/assets/images/eye-show-icon.svg?component";
import ClosedEyePassword from "@/assets/images/eye-hidden-icon.svg?component";

const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, { message: "Это обязательное поле" }).email({ message: "Некорректный E-mail" }),
      password: zod.string().min(1, { message: "Это обязательное поле" }).min(8, { message: "Пароль должен быть минимум 8 символов" }),
    })
);

const isPasswordHidden = ref(true);
const fieldPassType = computed(() => isPasswordHidden.value ? "password" : "text");

const router = useRouter();
const route = useRoute();

const { setAuth } = useAuth();

const { handleSubmit, errors, meta } = useForm({ validationSchema });

const { value: email, meta: emailMeta } = useField("email");
const { value: password, meta: passwordMeta } = useField("password");

const onSubmit = handleSubmit(() => {
  setAuth();
  router.push({ name: route.query?.redirect as string || RouteName.PUBLIC_PAGE });
});

function onChangePassVisibility() {
  isPasswordHidden.value = !isPasswordHidden.value;
}
</script>

<template>
  <form class="login-form" @submit="onSubmit">

    <div class="login-form__input">
      <div>E-Mail:</div>
      <!-- <input
        v-model="email"
        name="email"
        class="login-form__input-email"
        type="email"
        :class="{'is-invalid': !emailMeta.valid}"
      /> -->
      <BaseInput
        v-model="email" 
        input-type="email"
        input-name="email"
        :class="{'is-invalid': !emailMeta.valid}"
      />
      <span class="login-form__error">{{ errors.email }}</span>
    </div>

    <div class="login-form__input">
      <div>Password:</div>
      <!-- <input
        v-model="password"
        :type="fieldPassType"
        name="password"
        class="login-form__input-password"
        :class="{'is-invalid': !passwordMeta.valid}"
      /> -->
      <BaseInput 
        v-model="password"
        :input-type="fieldPassType"
        input-name="password"
        :class="{'is-invalid': !passwordMeta.valid}"
      />
      <OpenedEyePassword v-if="isPasswordHidden" class="login-form__password-eye" @click="onChangePassVisibility" />
      <ClosedEyePassword v-else class="login-form__password-eye" @click="onChangePassVisibility" />
      
      <span class="login-form__error">{{ errors.password }}</span>
    </div>

    <BaseButton
      :disabled="!meta.valid"
      type="primary"
    >
      Login
    </BaseButton>
  </form>

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