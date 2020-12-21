import React, { useState } from "react";

const SingleEventoCard = ({ image, title, description, date }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-img-top">
        <img src={image} alt={title} />
      </div>

      <div className="card-body ">
        <h5>{title}</h5>
        <p className=" card-description">{description}</p>
        <p className="m-0">{date}</p>
      </div>
    </div>
  );
};

export default SingleEventoCard;
