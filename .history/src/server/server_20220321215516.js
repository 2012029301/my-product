export async function loginMetamask() {
  let provider = freshProvider("metamask");
  let accounts = await provider.request({
    method: "eth_requestAccounts",
  });
  return {
    chainId: provider.networkVersion,
    address: accounts[0],
  };
}
