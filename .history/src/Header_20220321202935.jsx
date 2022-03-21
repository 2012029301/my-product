import "./header.less";
import { useHistory } from "react-router-dom";

const Header = function () {
  const useLocation = useLocation();
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
