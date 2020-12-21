import React, { useState } from "react";

const Banner = ({
  bannerImage,
  bannerColor,
  mainHeading,
  subHeading,
  mainHeadingColor = "#fff",
  subHeadingColor = "#fff",
  bannerBgImage,
}) => {
  return (
    <section className="container-fluid p-0">
      <div
        className="banner"
        style={{
          background: bannerBgImage
            ? `url(${bannerBgImage})`
            : `${bannerColor}`,
        }}
      >
        <div
          className="container d-flex flex-column justify-content-end h-100 pb-3 pb-md-5 "
          style={{
            background: bannerImage ? `url(${bannerImage})` : ``,
            backgroundSize: "620px 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
          }}
        >
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
