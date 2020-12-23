import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import UserInfo from "../components/UserProfile/UserInfo";
import UltimosEvento from "../components/UserProfile/UltimosEvento";
import ProximosEvento from "../components/HomePage/ProximosEvento/ProximosEvento";

const UserProfile = () => {
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
    <div>
      <Header />
      <Banner
        bannerColor={"#4BAD65"}
        mainHeading={"O meu perfil"}
        bannerContentImage={"media/Group-542.svg"}
      />
      <UserInfo />
      {/*<Banner*/}
      {/*  bannerColor={"#1A27C9"}*/}
      {/*  mainHeading={"Histórico de eventos"}*/}
      {/*  subHeading={"Onde já participei."}*/}
      {/*/>*/}
      {/*<UltimosEvento />*/}
      <ProximosEvento
        upComingEventsData={upComingEventsData}
        heading="Histórico de eventos"
      />
      <div className="my-5"></div>
      <Footer />
    </div>
  );
};

export default UserProfile;
