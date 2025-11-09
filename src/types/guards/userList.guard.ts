import type { TUser, TUserList } from "@/types/userList.types";

export function isUsers(data: unknown): data is TUserList {
  return (
    (data !== null) &&
    (typeof data === "object") &&
    ("results" in data) &&
    (Array.isArray(data.results))
  );
}

export function isUser(data: unknown): data is TUser {
  return (
    (data !== null) &&
    (typeof data === "object") &&
    ("phone" in data) &&
    (typeof data.phone === "string")
  );
}
