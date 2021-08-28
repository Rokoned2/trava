import React from "react";
import logoWhite from "./img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoWhite} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">EXTERIOR</span>
          <span className="heading-primary--sub">es donde la vida ocurre</span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Descubre los tours
        </a>
      </div>
    </header>
  );
};

export default Header;
