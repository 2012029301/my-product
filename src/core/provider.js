import { ethers } from "ethers";
let provider_ether;
function freshProvider(type) {
  // type 用来判断钱包类型
  let provider = null;
  console.log(ethers);
  if (type === "MetaMask") {
    provider = window.ethereum;
  }
  console.log(provider, "provider");
  provider_ether = new ethers.providers.Web3Provider(provider);

  return provider;
}
export { freshProvider, provider_ether };
