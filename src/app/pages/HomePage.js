import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SabroNos from "../components/HomePage/SabroNos";
import AppDownloadLink from "../components/HomePage/AppDownloadLink";
import ProximosEvento from "../components/HomePage/ProximosEvento/ProximosEvento";

const HomePage = () => {
  // const subHeading = `<div>No results.<br />Please try another search term.</div> `
  return (
    <div className="home-page">
      <Header />
      <Banner
        bannerColor={"#4BAD65"}
        subHeading={"Não corremos pela chegada. \n Corremos pela jornada."}
        mainHeading={"O que nos move"}
        bannerImage="media/Group-516.svg"
      />
      <AppDownloadLink />
      <ProximosEvento />
      {/*<QueOferecemosBanner />*/}
      <SabroNos />
      <Footer />
    </div>
  );
};

export default HomePage;
