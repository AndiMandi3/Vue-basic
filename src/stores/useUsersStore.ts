import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { UserApi } from "@/api/user.api";
import type { TUserPreview } from "@/types/userList.types";

export const useUsersStore = defineStore('users', () => {
  const pageNumberState = ref(1);
  const isLoadingState = ref(false);
  const usersArrayState = ref<TUserPreview[]>([]);
  const errorMessageState = ref<string | null>(null);

  const isLoading = computed(() => isLoadingState.value);
  const users = computed(() => usersArrayState.value);
  const errorMessage = computed(() => errorMessageState.value);
  const pageNumber = computed(() => pageNumberState.value);

  const fetchUsers = async (): Promise<void> => {
    isLoadingState.value = true;
    errorMessageState.value = null;

    const [response, error] = await UserApi.getUsers(pageNumber.value, 10);

    if(error) {
      errorMessageState.value = error;
      isLoadingState.value = false;
      return;
    }

    usersArrayState.value.push(...response);
    pageNumberState.value++;
    isLoadingState.value = false;
  };

  const resetUsers = (): void => {
    usersArrayState.value = [];
    pageNumberState.value = 1;
    errorMessageState.value = null;
  }

  return {
    isLoading,
    users,
    errorMessage,
    fetchUsers,
    resetUsers,
  };
});