let provider = window.ethereum;

export async function loginMetamask() {
  let accounts = await provider.request({
    method: "eth_requestAccounts",
  });
  return {
    chainId: provider.networkVersion,
    address: accounts[0],
  };
}
