<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>