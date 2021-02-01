import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const EventDetail = () => {
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
  const [itemData, setTtemData] = useState([]);
  const loadEventDetil = () => {
    setTtemData(singleItem);
  };
  useEffect(() => {
    loadEventDetil();
  }, []);
  return (
    <div>
      <Header headerTextColor="#000" />
      {console.log("itemData", itemData)}
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-3">
            <div className="back-btn">
              <Link to="/login">
                <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                Voltar
              </Link>
            </div>
          </div>
          <div className="col-9">
            <h1 className="display-3 ">{singleItem.title}e</h1>
            <div className="row">
              <div className="col-6">{singleItem.description}</div>
              <div className="col-5">
                <img src={singleItem.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
