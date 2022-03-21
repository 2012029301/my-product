import "./header.less";
import { useLocation } from "react-router-dom";

const Header = function () {
  const useLocation = useLocation();
  console.log(useLocation, "useLocation");
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
