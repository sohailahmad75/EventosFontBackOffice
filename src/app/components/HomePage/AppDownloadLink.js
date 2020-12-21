import React from "react";
import { Link } from "react-router-dom";
import AppStoreButton from "../svgs/AppStoreButton";
import PlayStoreButton from "../svgs/PlayStoreButton";
import ComputerImg from "../svgs/ComputerImg";

const AppDownloadLink = () => {
  return (
    <section className="container pl-3 py-3 py-md-5 mt-3 mt-md-5">
      <div className="row">
        <div className="col-6 mt-5 d-flex justify-content-end flex-column">
          <h1 className="display-1 pl-0">
            Ja tens a <br /> nossa app?
          </h1>
          <div className="d-flex align-items-center">
            <Link to="/register" className=" btn-app-link">
              <AppStoreButton width="170" />
            </Link>
            <Link to="/register" className="btn-app-link ml-3">
              <PlayStoreButton width="188" />
            </Link>
          </div>
        </div>
        <div className="col-6 mt-5 d-flex justify-content-end flex-column">
          <ComputerImg />
        </div>
      </div>
    </section>
  );
};

export default AppDownloadLink;
