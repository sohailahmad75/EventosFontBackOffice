import React, { useState } from "react";

const SingleEventoCard = ({
  image,
  title,
  description,
  date,
  button,
  link,
  isSharp,
  isSmall,
}) => {
  return (
    <div className={`card shadow-sm ${isSharp ? "rounded-0" : ""}`}>
      <div className={`card-img-top ${isSharp ? "rounded-0" : ""} ${isSmall ? 'small-card-img-top' : ''}`}>
        <img src={image} alt={title} />
      </div>

      <div className="card-body">
        <h5>{title}</h5>
        <p className=" card-description">{description}</p>
        <p className="m-0">{date}</p>
        {button && (
          <button className="btn btn-success rounded mt-2 mt-md-4 w-100">
            <small className="font-weight-bold">
              {button}
              <i className="ml-2 fa fa-shopping-cart" aria-hidden="true"></i>
            </small>
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleEventoCard;
