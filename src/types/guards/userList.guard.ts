import type { TUser, TUserList } from "@/types/userList.types";

export function isUsers(data: unknown): data is TUserList {
  return (
    (data !== null) &&
    (typeof data === "object") &&
    ("info" in data) &&
    (typeof data.info === "object") &&
    (data.info !== null) &&
    ("results" in data) &&
    (data.results !== null)
  );
}

export function isUser(data: unknown): data is TUser {
  return (
    (data !== null) &&
    (typeof data === "object") &&
    ("id" in data) &&
    (data.id !== null) &&
    (typeof data.id === "object")
  );
}
