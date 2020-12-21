import React from "react";
import { Link } from "react-router-dom";

const AppDownloadLink = () => {
  return (
    <section className="container pl-3 py-3 py-md-5 mt-3 mt-md-5">
      <div className="row">
        <div className="col-06 mt-5">
          <h1 className="display-1 pl-0">
            Ja tens a <br /> nossa app?
          </h1>
          <div className="d-flex justify-content-between">
            <Link
              to="/register"
              className="btn btn-secondary theme-button mt-3 d-flex btn-app-link"
            >
              <div className="w-25">
                <img
                  src="media/home-banner.png"
                  alt="apple_log"
                  width={10}
                  height={10}
                />
              </div>
              <div className="w-75">
                <p>Descarregar na</p>
                <h5>Apple Store</h5>
              </div>
            </Link>
            <Link
              to="/register"
              className="btn btn-secondary theme-button mt-3"
            >
              Iniciar sessão
            </Link>
          </div>
        </div>
        <div className="col-06 mt-5">img</div>
      </div>
    </section>
  );
};

export default AppDownloadLink;
