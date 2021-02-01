import React, { useEffect, useRef, useState } from "react";
import SingleEventoCard from "../../HomePage/ProximosEvento/SingleEventoCard";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import ListSubheader from "@material-ui/core/ListSubheader";
import InputLabel from "@material-ui/core/InputLabel";

const EventoRow = ({
  mainHeading,
  sideHeading,
  isButtons,
  backgroundColor,
  isSelectDropDown,
}) => {
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
    <section
      className="container-fluid proximos-eventos pl-0 pl-3 mt-3 mt-md-5"
      style={{ backgroundColor }}
    >
      {mainHeading && (
        <div className="row">
          <div className="col-12 col-md-9 offset-0 offset-md-3 mt-5">
            <h1 className="display-1 pl-0 pl-md-5">{mainHeading}</h1>
          </div>
        </div>
      )}
      <div className="row mt-5">
        <div className="col-12 col-md-3 text-left text-md-center mb-2 mb-md-0 p-2 p-md-5">
          {isSelectDropDown && (
            <FormControl
              variant="filled"
              className="w-100 rounded mb-0 mb-md-4"
            >
              <InputLabel htmlFor="grouped-select">Categoria</InputLabel>
              <Select>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          )}
          <p className="heading-with-line-gray mt-0 mt-md-4">{sideHeading}</p>
        </div>
        <div className="col-12 col-md-9 p-2 p-md-5">
          <div className="row flex-nowrap overflow-hidden" ref={navRef}>
            {upcomingEvents
              ? upcomingEvents.map((item, i) => (
                  <div
                    className="col-md-6 col-xl-4 col-12 pl-0 pl-md-3"
                    key={i}
                  >
                    <SingleEventoCard
                      title={item.title}
                      description={item.description}
                      date={item.date}
                      image={item.image}
                      button={"ADICIONAR AO CARRINHO"}
                      isSharp={true}
                    />
                  </div>
                ))
              : ""}
          </div>
          {isButtons && (
            <div className="p-3 row">
              <div className="col-12 d-flex justify-content-end">
                <button
                  className="btn btn-success  mr-2"
                  onClick={() => {
                    handleNav("left");
                  }}
                >
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button
                  className="btn btn-success ml-2"
                  onClick={() => {
                    handleNav("right");
                  }}
                >
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventoRow;
