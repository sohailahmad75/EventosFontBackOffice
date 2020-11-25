import React from "react";
import { Link } from "react-router-dom";

const Header = ({ headerTextColor = "#fff" }) => {
  return (
    <div className="header-sec" style={{ color: headerTextColor }}>
      <section className="container">
        <div className="header-tabs row d-flex justify-content-between">
          <Link to="/" className="col-12 col-md-7 col-lg-8">
            Eventos desportivos de Penacova
          </Link>
          <div className="d-flex col-12 col-md-5 col-lg-4 justify-content-between">
            <Link to="/eventos">Eventos</Link>
            <span>Sobre</span>
            <div
              className="vertical-line"
              style={{ borderColor: headerTextColor }}
            />
            <span>
              <i className="fa fa-shopping-cart" aria-hidden="true" />
            </span>
            <span>Iniciar sessão</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
