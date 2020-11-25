import React, { useState } from "react";

const SingleEventoCard = ({image,title,description,date}) => {
  return (
    <section className="container">
      <div className="row">

        <div className="card m-1">
          <img className="card-img-top" src={image} alt={title}/>
            <div className="card-body">
              <h4>{title}</h4>
              <p className="card-text">{description}</p>
              <p className="card-text mt-2">{date}</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SingleEventoCard;
