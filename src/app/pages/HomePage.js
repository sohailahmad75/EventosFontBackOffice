import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SabroNos from "../components/HomePage/SabroNos";
import AppDownloadLink from "../components/HomePage/AppDownloadLink";

const HomePage = () => {
  // const subHeading = `<div>No results.<br />Please try another search term.</div> `
  return (
    <div className="home-page">
      <Header />
      <Banner
        bannerImage={"media/home-banner.png"}
        subHeading={"Não corremos pela chegada. \n Corremos pela jornada."}
        mainHeading={"O que nos move"}
      />
      <AppDownloadLink />
      {/*<ProximosEvento />*/}
      {/*<QueOferecemosBanner />*/}
      <SabroNos />
      <Footer />
    </div>
  );
};

export default HomePage;
