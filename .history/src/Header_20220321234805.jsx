import "./header.less";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { loginMetamask } from "./server/server";
import { useRecoilState } from "recoil";
import { address } from "./store/store.js";
const Header = function () {
  let provider = window.ethereum;
  const [name, setName] = useRecoilState(address);
  useEffect(() => {
    setName();
  }, []);
  setTimeout(() => {
    console.log(name, "name");
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
