import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SabroNos from "../components/HomePage/SabroNos";
import AppDownloadLink from "../components/HomePage/AppDownloadLink";
import ProximosEvento from "../components/HomePage/ProximosEvento/ProximosEvento";
import QueOferecemosBanner from "../components/HomePage/QueOferecemosBanner";

const HomePage = () => {
  const upComingEventsData = [
    {
      title: "Rota da Lampreia",
      description:
        "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
      date: "12/11/2020",
      image: "media/dummy-event1.png",
    },
    {
      title: "Epic Sports",
      description:
        "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
      date: "18/11/2020",
      image: "media/dummy-event2.png",
    },
    {
      title: "ROta da Lampreia",
      description:
        "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
      date: "12/11/2020",
      image: "media/dummy-event3.png",
    },
    {
      title: "ROta da Lampreia",
      description:
        "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
      date: "12/11/2020",
      image: "media/dummy-event1.png",
    },
    {
      title: "Epic Sports",
      description:
        "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
      date: "18/11/2020",
      image: "media/dummy-event2.png",
    },
    {
      title: "ROta da Lampreia",
      description:
        "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
      date: "12/11/2020",
      image: "media/dummy-event3.png",
    },
  ];
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
      <ProximosEvento upComingEventsData={upComingEventsData} heading={'Próximos eventos'}/>
      <QueOferecemosBanner />
      <SabroNos />
      <Footer />
    </div>
  );
};

export default HomePage;
