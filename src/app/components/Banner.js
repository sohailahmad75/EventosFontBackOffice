import React, { useState } from "react";

const Banner = ({
  bannerImage,
  bannerColor,
  mainHeading,
  subHeading,
  mainHeadingColor = "#fff",
  subHeadingColor = "#fff",
}) => {
  return (
    <section className="container-fluid p-0">
      <div
        className="banner"
        style={{
          background: bannerImage ? `url(${bannerImage})` : `${bannerColor}`,
        }}
      >
        <div className="container d-flex flex-column justify-content-end h-100 pb-3 pb-md-5">
          <div className="main-heading" style={{ color: mainHeadingColor }}>
            <h1 className="display-1"> {mainHeading && mainHeading} </h1>
          </div>
          <div className="main-sub-heading" style={{ color: subHeadingColor }}>
            <h4 className="wrap-text">{subHeading && subHeading}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
