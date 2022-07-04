import { atom } from "recoil";
import { loginMetamask } from "../server/server";
export const addressType = atom({
  key: "addressType",
  default: loginMetamask(),
});
export const getBalance = atom({
  key: "getBalance",
  default: async () => {},
});
