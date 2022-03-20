// import { useHistory } from "react-router";
import "./header.less";
const Header = function () {
  //   const history = useHistory();
  return (
    <div className="header">
      <section className="left">
        <div>Home</div>
        <div>Product</div>
      </section>
      <section className="right"></section>
    </div>
  );
};
export default Header;
