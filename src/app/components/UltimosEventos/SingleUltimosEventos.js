import React from "react";

const SingleUltimosEventos = ({
  image,
  title,
  date,
  description,
  category,
}) => {
  return (
    <div
      className="mb-5"
      style={{ backgroundColor: "#f3f3f3", height: "350px" }}
    >
      <div className="w-100 p-2 h-100 d-flex">
        <div className="w-50">
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-50 px-2">
          <p className="h5 mt-2 mb-4 text-muted">{category}</p>
          <p className="mb-3 text-muted">{date}</p>
          <p className="h5">{title}</p>
          <p className="line-clamp">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleUltimosEventos;
