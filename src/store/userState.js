import { atom } from "recoil";

export const userState = atom({
  // システムで一位のキー
  key: "userState",
  default: { isAdmin: false }
});
