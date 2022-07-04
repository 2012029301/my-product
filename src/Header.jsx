import "./header.less";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { loginMetamask } from "./server/server";
import { useRecoilState, useRecoilValue } from "recoil";
import { addressType } from "./store/store.js";
const Header = function () {
  const [address, setAddress] = useRecoilState(addressType);
  const add = useRecoilValue(addressType);
  useEffect(() => {}, []);
  setTimeout(() => {
    console.log(address, "111", add);
  }, 100);
  return (
    <div className="header">
      <section className="left">
        <Link to="/">Home</Link>
        <Link to="/product">product</Link>
        <Link to="/near">near</Link>
        <Link to="/test-ts">test ts</Link>
      </section>
      <section className="right">
        <div></div>
      </section>
    </div>
  );
};
export default Header;
