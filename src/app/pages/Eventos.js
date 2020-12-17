import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import EventoProximos from "../components/Eventos/EventosProximos/EventoProximos";
import EventosTabs from "../components/Eventos/EventosTabs";

const Eventos = () => {
  return (
    <div>
      <Header headerTextColor="#0D0E0E" />
      <Banner
        bannerColor={"#FBDE3F"}
        subHeading={"Vamos relembrar o passado e motivar o futuro."}
        mainHeading={"Eventos"}
        mainHeadingColor={"#0D0E0E"}
        subHeadingColor={"#0D0E0E"}
      />
      <EventosTabs />
      <EventoProximos />
      <Footer />
    </div>
  );
};

export default Eventos;
