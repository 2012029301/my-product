import { freshProvider } from "../core/provider";

export async function loginMetamask() {
  console.log(freshProvider("MetaMask"));
  let provider = freshProvider("MetaMask");
  let accounts = await provider.request({
    method: "eth_requestAccounts",
  });
  return {
    chainId: provider.networkVersion,
    address: accounts[0],
  };
}
