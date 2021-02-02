import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({
  headerTextColor = "#fff",
  headerTitle = "Eventos desportivos de Penacova",
}) => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    if (window) {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div
      className="header-sec"
      style={{
        color: headerTextColor,
        backgroundColor: scrolled ? "#4BAD65" : "",
        transition: "background-color 0.3s ease",
      }}
    >
      <header className="container">
        <nav className="header-tabs row d-flex justify-content-between">
          <Link to="/" className="col-12 col-md-7 col-lg-8 header-title">
            {headerTitle}
          </Link>
          <div className="d-flex col-12 col-md-5 col-lg-4 justify-content-between">
            <Link to="/eventos">Eventos</Link>
            <Link to="/sobre">Sobre</Link>
            <div
              className="vertical-line"
              style={{ borderColor: headerTextColor }}
            />
            <span>
              <i className="fa fa-shopping-cart" aria-hidden="true" />
            </span>
            <span>Iniciar sessão</span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
