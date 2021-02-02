import React, { useEffect, useState } from "react";
import CalenderList from "./CalenderList";
import moment from "moment";
const CalenderView = () => {
  const eventsData = [
    {
      date: moment().subtract(20, "day"),
      title: "oldest event Event",
    },
    {
      date: moment().subtract(10, "day"),
      title: "older event Event",
    },
    {
      date: moment().subtract(1, "day"),
      title: "old event Event",
    },
    {
      date: moment(),
      title: "Today's Event",
    },
    {
      date: moment(),
      title: "Second Today's Event",
    },
    {
      date: moment(),
      title: "Third Today's Event",
    },
    {
      date: moment().add(3, "day"),
      title: "Another Event",
    },
  ];
  const [events, setEvents] = useState([]);
  useEffect(() => {
    loadEvents();
  }, []);
  const loadEvents = () => {
    setEvents(eventsData);
  };
  return (
    <div className="calender__main">
      <h1 className="calender__title display-3">Calendario</h1>
      <CalenderList events={events} months={1} />
    </div>
  );
};

export default CalenderView;
