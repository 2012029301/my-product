import { atom } from "recoil";
import { loginMetamask } from "../server/server";
export const addressType = atom({
  key: "addressType",
  default: loginMetamask(),
});
