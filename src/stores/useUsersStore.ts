import { ref } from "vue";
import { defineStore } from "pinia";
import { UserApi } from "@/api/user.api";
import type { TUserPreview } from "@/types/userList.types";

export const useUsersStore = defineStore('users', () => {
  const pageNumber = ref(1);
  const isLoading = ref(false);
  const users = ref<TUserPreview[]>([]);
  const errorMessage = ref('');

  const fetchUsers = async (): Promise<void> => {
    isLoading.value = true;
    errorMessage.value = '';

    const newUsers = await UserApi.getUsers(pageNumber.value, 10);
    
    if(newUsers) {
      users.value.push(...newUsers)
    } else {
      errorMessage.value = "Ошибка загрузки данных. Повторите попытку позже";
    }

    isLoading.value = false;
  };

  const loadMoreUsers = async (): Promise<void> => {
    pageNumber.value++;
    await fetchUsers();
  };

  return {
    pageNumber,
    errorMessage,
    users,
    isLoading,
    fetchUsers,
    loadMoreUsers,
  };
});