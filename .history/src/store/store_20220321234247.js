import { atom } from "recoil";
import { loginMetamask } from "../server/server";
export const address = atom({
  key: "address",
  default: async function loginMetamask() {
    let accounts = await provider.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts, "accounts");
    return {
      chainId: provider.networkVersion,
      address: accounts[0],
    };
  },
});
