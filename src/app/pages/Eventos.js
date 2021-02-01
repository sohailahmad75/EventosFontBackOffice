import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import EventoRow from "../components/Eventos/EventosProximos/EventoRow";
import EventosTabs from "../components/Eventos/EventosTabs";
import BannerImageWithText from "../components/Eventos/BannerImageWithText";
import EventosByYear from "../components/Eventos/EventosByYear";

const Eventos = () => {
  const eventosByYearData = [
    {
      title: "2020",
      heading: "",
      linkText: "Mais eventos de 2020",
      linkHref: "#",
      cardsData: [
        {
          title: "Rota da Lampreia",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event1.png",
        },
        {
          title: "Epic Sports",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event2.png",
        },
        {
          title: "Rota da Lampreia",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event3.png",
        },
      ],
    },
    {
      title: "2019",
      heading: "O ANO MAGICO",
      linkText: "Mais eventos de 2019",
      linkHref: "#",
      cardsData: [
        {
          title: "Rota da Lampreia",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event1.png",
        },
        {
          title: "Epic Sports",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event2.png",
        },
        {
          title: "Rota da Lampreia",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event3.png",
        },
      ],
    },
    {
      title: "2018",
      heading: "",
      linkText: "Mais eventos de 2018",
      linkHref: "#",
      cardsData: [
        {
          title: "Rota da Lampreia",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event1.png",
        },
        {
          title: "Epic Sports",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event2.png",
        },
        {
          title: "Rota da Lampreia",
          description:
            "A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.",
          image: "media/dummy-event3.png",
        },
      ],
    },
  ];

  const [dataByYears, setDataByYears] = useState([]);
  const loadUpcomingEvents = () => {
    setDataByYears(eventosByYearData);
  };
  useEffect(() => {
    loadUpcomingEvents();
  }, []);
  return (
    <div>
      <Header headerTextColor="#fff" />
      <Banner
        bannerColor={"#4BAD65"}
        subHeading={"Vamos relembrar o passado e motivar o futuro."}
        mainHeading={"Eventos"}
        mainHeadingColor={"#fff"}
        subHeadingColor={"#fff"}
      />
      <EventosTabs />
      <EventoRow
        mainHeading="Próximos eventos"
        sideHeading="ESTA SEMANA"
        isButtons={true}
        backgroundColor={"#fafafa"}
        isSelectDropDown={true}
      />
      <EventoRow sideHeading="FUTURUS" backgroundColor={"#fff"} />
      <BannerImageWithText
        bannerBgImage={"media/home-banner.png"}
        mainHeading={"Eventos \npassados"}
      />
      {dataByYears &&
        dataByYears.map((singleEvent) => {
          <EventosByYear />;
        })}
      <Footer />
    </div>
  );
};

export default Eventos;
