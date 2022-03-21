let provider = window.ethereum;

export async function loginMetamask() {
  let accounts = await provider.request({
    method: "eth_requestAccounts",
  });
  console.log(accounts, "accounts");
  return {
    chainId: provider.networkVersion,
    address: accounts[0],
  };
}
