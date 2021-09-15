import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label
        for="navi-toggle"
        className="navigation__button"
        onClick={() => setOpen(!open)}
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        {open ? (
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#section-about" className="navigation__link">
                <span>01</span>Sobre Trava
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-features" className="navigation__link">
                <span>02</span>Tus beneficios
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-tours" className="navigation__link">
                <span>03</span>Tours populares
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-stories" className="navigation__link">
                <span>04</span>Historias
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-book" className="navigation__link">
                <span>05</span>Agendar ahora
              </a>
            </li>
          </ul>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
