import "./header.less";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Header = function () {
  let provider = window.ethereum;
  console.log(provider);
  useEffect(() => {}, []);
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
