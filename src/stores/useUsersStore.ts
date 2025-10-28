import { ref } from "vue";
import { defineStore } from "pinia";
import UserApi from "@/api/user.api";
import type { TUserPreview } from "@/types/userList.types";

export const useUsersStore = defineStore('user', () => {
  const counterPagination = ref(1);
  const isLoading = ref(false);
  const users = ref<TUserPreview[] | null>([]);
  const errorMessage = ref<string | null>('');

  const fetchUsers = async () => {
    isLoading.value = true;

    try {
      users.value = await UserApi.getUserList(counterPagination.value);
    } catch {
      errorMessage.value = 'Ошибка загрузки. Повторите попытку позже';
    } finally {
      isLoading.value = false;
    }
  };

  const loadMoreUsers = async() => {
    counterPagination.value++;
    await fetchUsers();
  };

  return {
    counterPagination,
    users,
    isLoading,
    errorMessage,
    fetchUsers,
    loadMoreUsers,
  };
});