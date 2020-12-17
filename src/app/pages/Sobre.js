import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SobreTabs from "../components/Sobre/SobreTabs";
import QuemSomos from "../components/Sobre/QuemSomos";
import Contactos from "../components/Sobre/Contactos";

const Sobre = () => {
  return (
    <div>
      <Header />
      <Banner
        bannerColor={"#1A27C9"}
        subHeading={"Quem somos, o que fazemos e o que oferecemos."}
        mainHeading={"Sobre nós"}
      />
      <SobreTabs />
      <QuemSomos />
      <Contactos />
      <Footer />
    </div>
  );
};

export default Sobre;
