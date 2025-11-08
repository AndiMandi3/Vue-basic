import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { UserApi } from "@/api/user.api";
import type { TUserPreview } from "@/types/userList.types";

export const useUsersStore = defineStore('users', () => {
  const pageNumberValue = ref(1);
  const isLoadingValue = ref(false);
  const usersArray = ref<TUserPreview[]>([]);
  const errorMessageValue = ref<string | null>(null);

  const isLoading = computed(() => isLoadingValue.value);
  const users = computed(() => usersArray.value);
  const errorMessage = computed(() => errorMessageValue.value);
  const pageNumber = computed(() => pageNumberValue.value);

  const fetchUsers = async (): Promise<void> => {
    isLoadingValue.value = true;
    errorMessageValue.value = null;

    const [response, error] = await UserApi.getUsers(pageNumber.value, 10);

    if(error) {
      errorMessageValue.value = error;
      isLoadingValue.value = false;
      return;
    }

    usersArray.value.push(...response);
    pageNumberValue.value++;
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