import "./header.less";
import { Link } from "react-router-dom";
const Header = function () {
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
