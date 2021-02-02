import React from "react";
import { Link } from "react-router-dom";

const EventDetailsItem = ({ item }) => {
  return (
    <div className="container pt-5">
      <div className="row pt-5">
        <div className="col-3">
          <div className="back-btn">
            <Link to="/login">
              <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i>
              Voltar
            </Link>
          </div>
        </div>
        <div className="col-9">
          <h1 className="display-3 ">{item.title}e</h1>
          <div className="row">
            <div className="col-6">{item.description}</div>
            <div className="col-5">
              <img src={item.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsItem;
