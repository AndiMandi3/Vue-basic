<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import BaseButton from "@/components/ui/BaseButton.vue";

const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, { message: 'This is required' }).email({ message: 'Must be a valid email' }),
      password: zod.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' }),
    })
);

</script>

<template>
  <Form class="login-form" :validationSchema="validationSchema">

    <div class="login-form__input">
      <label for="login-form__email">E-Mail:</label>
      <Field name="email" class="login-form__input-email" type="email" value="" />
      <ErrorMessage class="login-form__error-message" name="email" />
    </div>
    <div class="login-form__input">
      <label for="login-form__password">Password:</label>
      <Field name="password" type="password" class="login-form__input-password" value="" />
      <ErrorMessage class="login-form__error-message" name="password" />
    </div>

    <BaseButton type="submit">Login</BaseButton>
  </Form>
</template>

<style scoped lang="scss">
.login-form {
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;

  &__input, &__submit {
    margin-top: 20px;
  }

  &__input {
    display: inherit;
    flex-direction: column;

    &-email, &-password {
      padding: 10px 0 0 0;
      border: none;
      border-bottom: 2px solid $gray;
      margin-top: 5px;
      font-size: 16px;

      &:focus {
        outline: none;
        border-color: $accent-color;
      }

      &--error {
        border-color: $warning-color;
      }
    }
  }

  &__error-message {
    margin-top: 5px;
    color: $warning-color;
  }

  &__submit {
    font-size: 16px;
    padding: 10px;
    background-color: $accent-color;
    color: white;
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