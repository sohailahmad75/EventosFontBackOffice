import React from "react";

const Spinner = () => {
  return (
    <div
      className="position-absolute d-flex align-items-center justify-content-center"
      style={{ top: "0", left: "0", bottom: "0", right: "0" }}
    >
      <div className="spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
