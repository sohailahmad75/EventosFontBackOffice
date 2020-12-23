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
        <div className="col-12 col-md-10 offset-0 offset-md-2 mt-5 proximos-main-container">
          <div className="row m-0 align-items-end proximos-main__title">
            <h1 className="display-1 col-9">{heading}</h1>
            <div className="col-3 d-flex justify-content-end">
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
