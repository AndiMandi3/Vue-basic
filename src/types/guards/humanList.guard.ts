import type { THuman, THumanList } from "@/types/humanList.types.ts";

function isHumanList(data: unknown): data is THumanList {
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

function isHuman(data: unknown): data is THuman {
  return (
    (data !== null) &&
    (typeof data === "object") &&
    ("id" in data) &&
    (data.id !== null) &&
    (typeof data.id === "object") &&
    ("name" in data.id) &&
    ("value" in data.id)
  );
}

export {
  isHumanList,
  isHuman,
}