import React, { useState, useRef, useEffect } from "react";
import SingleEventoCard from "./SingleEventoCard";
import ScrollContainer from "react-indiana-drag-scroll";
const ProximosEvento = () => {
  const upComingEventsData = [
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
  let navRef = useRef();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const loadUpcomingEvents = () => {
    setUpcomingEvents(upComingEventsData);
  };

  const handleNav = (direction) => {
    if (direction === "left") {
      navRef.current.scrollLeft = navRef
        ? (navRef.current.scrollLeft -= 300)
        : null;
    } else {
      navRef.current.scrollLeft = navRef
        ? (navRef.current.scrollLeft += 300)
        : null;
    }
  };
  useEffect(() => {
    loadUpcomingEvents();
  }, []);
  return (
    <section className="container-fluid pl-0 pl-3 mt-3 mt-md-5">
      <div className="row ">
        <div className="col-12 col-md-9 offset-0 offset-md-3 mt-5 proximos-main-container">
          {" "}
          <div className="row m-0 align-items-end proximos-main__title">
            <h1 className="display-1 col-6">Próximos eventos</h1>
            <div className="col-6 d-flex justify-content-end">
              <button className="btn btn-text btn-sm mb-2">
                VER MAIS <i className="ml-1 fa fa-angle-right" />
              </button>
            </div>
          </div>
          <ScrollContainer className=" proximos-card-container">
            {upcomingEvents
              ? upcomingEvents.map((item, i) => (
                  <SingleEventoCard
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    image={item.image}
                    key={i}
                  />
                ))
              : ""}
          </ScrollContainer>
        </div>
      </div>
    </section>
  );
};

export default ProximosEvento;
