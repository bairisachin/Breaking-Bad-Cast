import "../css/Header.css";
import Logo from "../assets/Breaking_Bad_logo.svg";
import Search from "./Search";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="" />
      <div className="header__input">
        <Search />
      </div>
    </div>
  );
}

export default Header;
