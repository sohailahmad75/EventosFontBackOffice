import React, { useState } from "react";

const BannerImageWithText = ({
  bannerColor = "#fff",
  mainHeading,
  mainHeadingColor = "#fff",
  bannerBgImage,
}) => {
  return (
    <section className="container-fluid p-0">
      <div
        className="banner d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: bannerBgImage
            ? `url(${bannerBgImage})`
            : `${bannerColor}`,
        }}
      >
        <div
          className="main-heading container"
          style={{ color: mainHeadingColor }}
        >
          <div className="row">
            <div className="offset-3 col-9">
              <h1 className="display-1 " style={{ whiteSpace: "pre-wrap" }}>
                {mainHeading && mainHeading}{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerImageWithText;
