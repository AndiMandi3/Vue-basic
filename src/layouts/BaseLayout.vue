<script setup lang="ts">
import BaseHeader from "@/layouts/components/BaseHeader.vue";
</script>

<template>
    <div class="base-layout">
        <BaseHeader />
        <div class="base-layout__content">
            <RouterView />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .base-layout {
        height: 100%;
        
        &__content {
            height: 100%;
        }
    }
</style>