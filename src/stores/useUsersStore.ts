import { ref } from "vue";
import { defineStore } from "pinia";
import UserApi from "@/api/user.api";
import type { TUserPreview } from "@/types/userList.types";

export const useUsersStore = defineStore('users', () => {
  const counterPagination = ref(1);
  const isLoading = ref(false);
  const users = ref<TUserPreview[]>([]);
  const errorMessage = ref<string>('');

  const fetchUsers = async () => {
    isLoading.value = true;
    errorMessage.value = '';

    users.value = await UserApi.getUserList(counterPagination.value);

    isLoading.value = false;
  };

  const loadMoreUsers = async () => {
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