import { ref } from "vue";
import { defineStore } from "pinia";
import User from "@/api/user.api";
import type { TUserPreview } from "@/types/userList.types";

export const useUsersStore = defineStore('user', () => {
  const counterPagination = ref(1);
  const isLoading = ref(false);
  const users = ref<TUserPreview[] | null>(null);
  const error = ref<string | null>(null);

  const fetchUsers = async() => {
    isLoading.value = true;

    try {
      users.value = await User.getUsers(counterPagination.value);
    } catch {
      error.value = 'Ошибка загрузки. Повторите попытку позже';
    } finally {
      isLoading.value = false;
    }
  };

  const loadMoreUsers = async() => {
    counterPagination.value++;
    await fetchUsers();
  };

  fetchUsers();

  return {
    counterPagination,
    users,
    isLoading,
    error,
    fetchUsers,
    loadMoreUsers,
  };
});