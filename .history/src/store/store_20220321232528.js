import { atom } from "recoil";
import loginMetamask from "../server/server";
export const address = atom({
  key: "address",
  default: loginMetamask(),
});
