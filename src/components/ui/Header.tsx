import { FunctionComponent } from "react";
import logo from "./../../assets/images/logo.jpg";
import "./../../style/ui/header.css";

const Header: FunctionComponent = () => {
  return (
    <header className="container header">
      <div className="header-container">
        <img
          src={logo}
          alt="site-logo"
          onClick={() => document.location.reload()}
        />
        <h1 className="large-header">Typing Test</h1>
      </div>
    </header>
  );
};

export default Header;
