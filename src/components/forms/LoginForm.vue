<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { RouteName } from "@/consts/router.const.ts";
import useAuth from "@/composibles/useAuth.ts"
import * as zod from "zod";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";

const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, { message: "Это обязательное поле" }).email({ message: "Некорректный E-mail" }),
      password: zod.string().min(1, { message: "Это обязательное поле" }).min(8, { message: "Пароль должен быть минимум 8 символов" }),
    })
);

const router = useRouter();
const route = useRoute();

const { setAuth } = useAuth();

const { errors, meta } = useForm({ validationSchema });

const { value: email} = useField("email");
const { value: password} = useField("password");

function onSubmit() {
  setAuth(true)
  router.push({ name: route.query?.redirect as string || RouteName.PUBLIC_PAGE });
}
</script>

<template>
  <form class="login-form" @submit.prevent="onSubmit">
      <BaseInput
          v-model="email"
          input-type="email"
          :error="errors.email"
          input-name="email"
          label="E-Mail"
      />
      <BaseInput
          v-model="password"
          input-type="password"
          :error="errors.password"
          input-name="password"
          label="Password"
      />
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
}
</style>