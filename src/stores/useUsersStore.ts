import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { UserApi } from "@/api/user.api";
import type { TUserPreview } from "@/types/userList.types";

export const useUsersStore = defineStore('users', () => {
  const pageNumberValue = ref(1);
  const isLoadingValue = ref(false);
  const usersArray = ref<TUserPreview[]>([]);
  const errorMessageValue = ref('');

  const isLoading = computed(() => isLoadingValue.value);
  const users = computed(() => usersArray.value);
  const errorMessage = computed(() => errorMessageValue.value);
  const pageNumber = computed(() => pageNumberValue.value);

  const fetchUsers = async (): Promise<void> => {
    isLoadingValue.value = true;
    errorMessageValue.value = '';

    const newUsers = await UserApi.getUsers(pageNumber.value, 10);
    
    if(newUsers.length) {
      usersArray.value.push(...newUsers);
      pageNumberValue.value++;
    } else {
      errorMessageValue.value = "Ошибка загрузки данных. Повторите попытку позже";
    }

    isLoadingValue.value = false;
  };

  const resetUsers = () => {
    usersArray.value = [];
    pageNumberValue.value = 1;
  }

  return {
    isLoading,
    users,
    errorMessage,
    fetchUsers,
    resetUsers,
  };
});