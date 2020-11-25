import React, { useEffect, useRef, useState } from "react";
import SingleEventoCard from "../../HomePage/ProximosEvento/SingleEventoCard";

const EventoProximos = () => {
  const upComingEventsData = [
    {
      title: "Rota da Lampreia",
      date: "12/11/2020",
      image: "media/dummy-event1.png",
    },
    {
      title: "Epic Sports",
      date: "18/11/2020",
      image: "media/dummy-event2.png",
    },
    {
      title: "Rota da Lampreia",
      date: "12/11/2020",
      image: "media/dummy-event3.png",
    },
    {
      title: "Rota da Lampreia",
      date: "12/11/2020",
      image: "media/dummy-event1.png",
    },
    {
      title: "Epic Sports",
      date: "18/11/2020",
      image: "media/dummy-event2.png",
    },
    {
      title: "Rota da Lampreia",
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
      <div className="row">
        <div className="col-12 col-md-9 offset-0 offset-md-3 mt-5">
          {" "}
          <h1 className="display-1 pl-0 pl-md-5">Próximos eventos</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-3 text-left text-md-center mb-2 mb-md-0">
          <p className="heading-with-line-gray">ESTA SEMANA</p>
        </div>
        <div className="col-12 col-md-9 ">
          <div className="row flex-nowrap overflow-hidden" ref={navRef}>
            {upcomingEvents
              ? upcomingEvents.map((item, i) => (
                  <div
                    className="col-md-6 col-xl-4 col-12 pl-0 pl-md-5"
                    key={i}
                  >
                    <SingleEventoCard
                      title={item.title}
                      description={item.description}
                      date={item.date}
                      image={item.image}
                    />
                  </div>
                ))
              : ""}
          </div>
          <div className="p-3 row">
            <div className="col-8 d-flex justify-content-end">
              <button
                className="btn btn-primary  mr-2"
                onClick={() => {
                  handleNav("left");
                }}
              >
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </button>
              <button
                className="btn btn-primary ml-2"
                onClick={() => {
                  handleNav("right");
                }}
              >
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventoProximos;
