<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router"
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { RouteName } from "@/consts/router.const.ts";
import useAuth from "@/composibles/useAuth.ts"
import * as zod from "zod";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import OpenedEyePasswordIcon from "@/assets/images/eye-show-icon.svg?component";
import ClosedEyePasswordIcon from "@/assets/images/eye-hidden-icon.svg?component";

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

const { errors, meta } = useForm({ validationSchema });

const { value: email, meta: emailMeta } = useField("email");
const { value: password, meta: passwordMeta } = useField("password");

function onSubmit() {
  setAuth(true)
  router.push({ name: route.query?.redirect as string || RouteName.PUBLIC_PAGE });
}

function showPassVisibility() {
  isPasswordHidden.value = false;
}

function hidePassVisibility() {
  isPasswordHidden.value = true;
}
</script>

<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <div class="login-form__input">
      <div>E-Mail:</div>
      <BaseInput
          v-model="email"
          input-type="email"
          :is-valid="emailMeta.valid"
          :error="errors.email"
          input-name="email"
      />
    </div>

    <div class="login-form__input">
      <div>Password:</div>
      <BaseInput
          v-model="password"
          :input-type="fieldPassType"
          :is-valid="passwordMeta.valid"
          :error="errors.password"
          input-name="password"
      />
      <OpenedEyePasswordIcon v-if="isPasswordHidden" class="login-form__password-eye" @click="showPassVisibility" />
      <ClosedEyePasswordIcon v-else class="login-form__password-eye" @click="hidePassVisibility" />
    </div>

    <BaseButton
        :is-disabled="!meta.valid"
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
}
</style>