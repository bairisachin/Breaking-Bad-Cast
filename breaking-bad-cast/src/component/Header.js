import "../css/Header.css";
import Logo from "../assets/Breaking_Bad_logo1.svg";
import Search from "./Search";

function Header({ getQuery }) {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="" />
      <div className="header__input">
        <Search getQuery={getQuery} />
      </div>
    </div>
  );
}

export default Header;
