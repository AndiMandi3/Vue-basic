import { ref } from "vue";
import { defineStore } from "pinia";
import RandomHuman from "@/api/randomHumanApi.ts";
import type { THuman } from "@/types/humanList.types.ts";

export const useHumansStore = defineStore('humans', () => {
  const counterPagination = ref(1);
  const isLoading = ref(false);
  const humans = ref<THuman[] | null>(null);
  const error = ref<string | null>(null);

  const fetchHumans = async() => {
    isLoading.value = true;

    try {
      humans.value = await RandomHuman.getHumans(counterPagination.value);;
    } catch (e) {
      error.value = 'Ошибка загрузки. Повторите попытку позже';
    } finally {
      isLoading.value = false;
    }
  };

  const loadMoreHumans = async() => {
    counterPagination.value++;
    await fetchHumans();
  };

  fetchHumans()

  return {
    counterPagination,
    humans,
    isLoading,
    error,
    fetchHumans,
    loadMoreHumans,
  };
});