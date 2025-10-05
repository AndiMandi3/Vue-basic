<script setup lang="ts">
</script>

<template>
  <form action="" class="login-form">
    <h1 class="login-form__title">Authorization</h1>
    <div class="login-form__input">
      <label for="login-form__email">E-Mail:</label>
      <input type="email" name="login-form__email" id="login-form__email" class="login-form__input-email" autocomplete="off" placeholder="ivanov_ii@example.com">
    </div>
    <div class="login-form__input">
      <label for="login-form__password">Password:</label>
      <input type="password" name="login-form__password" id="login-form__password" class="login-form__input-password" autocomplete="off" >
    </div>
    <input type="submit" value="Login" class="login-form__submit">
  </form>
</template>

<style scoped lang="scss">
.login-form {
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;

  &__title {
    text-align: center;
  }

  &__input, &__submit {
    margin-top: 20px;
  }

  &__input {
    display: inherit;
    flex-direction: column;

    &-email, &-password {
      padding: 10px 0 0 0;
      border: none;
      border-bottom: 1px solid $gray;
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

    &__error-message {
      color: $warning-color;
    }
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