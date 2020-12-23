import React, { useState, useRef, useEffect } from "react";
import SingleEventoCard from "./SingleEventoCard";
import ScrollContainer from "react-indiana-drag-scroll";
import Link from "@material-ui/core/Link";
const ProximosEvento = ({ upComingEventsData, heading = "Eventos" }) => {
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
          <h1 className="display-1 col-6">Próximos eventos</h1>
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
