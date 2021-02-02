import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import EventDetailsItem from "../components/EventDetailsItem";
import CalenderView from "../components/Calender/CalenderView";

const EventRegister = () => {
  const singleItem = {
    title: "Rota da Lampreia",
    date: "12/11/2020",
    image: "media/dummy-event1.png",
    description:
      "Já se encontram abertas as inscrições para a Maratona BTT – Rota da Lampreia 2020. A prova que se realizará no próximo dia 01 de março, irá como no ano transato, contar para a Taça Regional do Centro.\n" +
      "Com dois percursos alternativos, um de 40Km e outro de 70Km, a prova será feita nos habituais moldes, privilegiando as paisagens, locais turísticos e aproveitando as margens do Mondego para rolar até à meta.\n" +
      "Inscreva-se já!",
    category: "Maratona BTT",
    time: "3h",
    price: "6$/pessoa",
    distance: "40 km",
    eventDate: "12 novembro 2020, 14h",
    location: "Largo Alberto Leitao n5 3360-341, Penacova",
    btnLink: "#",
    btnText: "INSCREVER-ME",
  };
  const [itemData, setItemData] = useState({});
  const loadEventDetil = () => {
    setItemData(singleItem);
  };
  useEffect(() => {
    loadEventDetil();
  }, []);
  return (
    <div>
      <Header headerTextColor="#0D0E0E" headerTitle="EvenTU" />
      <div className="pt-5">
        <EventDetailsItem item={itemData} />
      </div>
      <CalenderView />
    </div>
  );
};

export default EventRegister;
