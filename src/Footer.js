import React from "react";
import logoGreen2x from "./img/logo-green-2x.png";
import logoGreen1x from "./img/logo-green-1x.png";
import logoGreenS1x from "./img/logo-green-small-1x.png";
import logoGreenS2x from "./img/logo-green-small-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${logoGreenS1x} 1x, ${logoGreenS2x}  2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${logoGreen1x} 1x, ${logoGreen2x} 2x`}
            alt="Full logo"
            src={logoGreen2x}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Empresa
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Contáctanos
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Trabajo
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Política de privacidad
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Hecho por{" "}
            <a href="/" className="footer__link">
              Victor Balarezo
            </a>
            . Copyright &copy; by Trava.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
