<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { ref } from 'vue';
import * as zod from 'zod';

import BaseButton from "@/components/ui/BaseButton.vue";

const emailValue = ref("");
const passwordValue = ref("");

const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, { message: 'This is required' }).email({ message: 'Must be a valid email' }),
      password: zod.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' }),
    })
);

function onSubmit(values: unknown) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <Form class="login-form" :validation-schema="validationSchema" @submit="onSubmit">

    <div class="login-form__input">
      <div>E-Mail:</div>
      <Field v-model="emailValue" name="email" class="login-form__input-email" type="email"/>
      <ErrorMessage class="login-form__error" name="email" />
    </div>
    <div class="login-form__input">
      <div>Password:</div>
      <Field v-model="passwordValue" name="password" type="password" class="login-form__input-password" />
      <ErrorMessage class="login-form__error" name="password" />
    </div>

    <BaseButton type="primary">Login</BaseButton>
  </Form>
</template>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;

  &__input, &__submit {
    margin-top: 20px;
  }

  &__input {
    display: flex;
    flex-direction: column;

    &-email, &-password {
      padding: 10px 0 0 0;
      border: none;
      border-bottom: 2px solid $gray-color;
      margin-top: 5px;
      font-size: 16px;

      &:focus {
        outline: none;
        border-color: $accent-color;
      }
    }
  }

  &__error {
    margin-top: 5px;
    color: $warning-color;
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