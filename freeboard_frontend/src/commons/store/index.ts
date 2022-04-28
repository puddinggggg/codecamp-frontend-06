import { atom } from "recoil";

export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
