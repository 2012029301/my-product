import "./header.less";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { loginMetamask } from "./server/server";
import { useRecoilState } from "recoil";
const Header = function () {
  let provider = window.ethereum;
  console.log(provider);
  const [name, setName] = useRecoilState(nameState);
  useEffect(() => {
    loginMetamask();
  }, []);
  return (
    <div className="header">
      <section className="left">
        <Link to="/">Home</Link>
        <Link to="/product">product</Link>
      </section>
      <section className="right"></section>
    </div>
  );
};
export default Header;
