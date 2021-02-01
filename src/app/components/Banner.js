import React, { useState } from "react";

const Banner = ({
  bannerImage,
  bannerColor,
  mainHeading,
  subHeading,
  mainHeadingColor = "#fff",
  subHeadingColor = "#fff",
  bannerBgImage,
  bannerContentImage,
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
            backgroundSize: "550px 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
          }}
        >
          <div className="row m-0">
            <div className={`${bannerContentImage ? "col-6" : "col-12"}`}>
              <div className="main-heading" style={{ color: mainHeadingColor }}>
                <h1 className="display-1"> {mainHeading && mainHeading} </h1>
              </div>
              <div
                className="main-sub-heading"
                style={{ color: subHeadingColor }}
              >
                <h4 className="wrap-text">{subHeading && subHeading}</h4>
              </div>
            </div>
            <div
              className={`${
                bannerContentImage ? "col-6" : "d-none"
              } position-relative`}
            >
              <img
                src={`${bannerContentImage}`}
                alt="ContentImage"
                className="position-absolute w-100 h-auto p-3"
                style={{ top: "-130px", right: "0", left: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
