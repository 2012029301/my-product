import "./header.less";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { loginMetamask } from "./server/server";
import { useRecoilState } from "recoil";
import { addressType } from "./store/store.js";
const Header = function () {
  let provider = window.ethereum;
  const [address, setAddress] = useRecoilState(addressType);
  const add = useRecoilValue(addressType);
  useEffect(() => {
    setAddress();
  }, []);
  setTimeout(() => {
    console.log(address);
  }, 100);
  return (
    <div className="header">
      <section className="left">
        <Link to="/">Home</Link>
        <Link to="/product">product</Link>
      </section>
      <section className="right">
        <div></div>
      </section>
    </div>
  );
};
export default Header;
