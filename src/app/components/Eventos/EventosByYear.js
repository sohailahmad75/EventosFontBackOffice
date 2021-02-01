import React from "react";
import SingleEventoCard from "../HomePage/ProximosEvento/SingleEventoCard";
import Link from "@material-ui/core/Link";

const EventosByYear = ({
  title = "2020",
  heading = "",
  linkText = "Mais eventos de 2020",
  linkHref = "#",
  cardsData = [
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
  ],
}) => {
  return (
    <div className="container">
      <div className="row p-3 mt-md-5 mt-3">
        <div className="col-4 col-md-2 ">
          <h4>{title}</h4>
          <h3 className="text-muted">{heading}</h3>
        </div>
        <div className="col-4 col-md-8">
          <div className="row">
            {console.log("cardsData", cardsData)}
            {cardsData &&
              cardsData.map((event) => (
                <div className="col-4 col-md-4">
                  <SingleEventoCard
                    title={event.title}
                    description={event.description}
                    image={event.image}
                    isSharp={true}
                    isSmall={true}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="col-4 col-md-2 align-self-end px-4">
          <Link to={linkHref}>
            <span className="mr-2">{linkText}</span>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventosByYear;
