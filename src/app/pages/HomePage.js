import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ProximosEvento from "../components/HomePage/ProximosEvento/ProximosEvento";
import QueOferecemosBanner from "../components/HomePage/QueOferecemosBanner";
import SabroNos from "../components/HomePage/SabroNos";

const HomePage = () => {
  // const subHeading = `<div>No results.<br />Please try another search term.</div> `
  return (
    <div>
      <Header/>
      <Banner bannerImage={'media/home-banner.png'} subHeading={'Não corremos pela chegada. \n Corremos pela jornada.'} mainHeading={'O que nos move'}/>
      <ProximosEvento/>
      <QueOferecemosBanner/>
      <SabroNos/>
      <Footer/>
    </div>
  );
};

export default HomePage;
