import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SobreTabs from "../components/Sobre/SobreTabs";
import QuemSomos from "../components/Sobre/QuemSomos";
import Contactos from "../components/Sobre/Contactos";
import NossasModalidades from "../components/HomePage/NossasModalidades";
import Rgpd from "../components/Sobre/Rgpd";
import PerguntasFreq from "../components/Sobre/PerguntasFreq";

const Sobre = () => {
  return (
    <div>
      <Header />
      <Banner
        bannerColor={"#4BAD65"}
        subHeading={"Quem somos, o que fazemos e o que oferecemos."}
        mainHeading={"Sobre nós"}
        bannerImage="media/sobre_banner.svg"
      />
      <SobreTabs />
      <QuemSomos />
      <Contactos />
      <NossasModalidades />
      <Rgpd />
      <PerguntasFreq />
      <Footer />
    </div>
  );
};

export default Sobre;
