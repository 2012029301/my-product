import "./header.less";
import { useLocation, Link } from "react-router-dom";
const Header = function () {
  const history = 1;
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
