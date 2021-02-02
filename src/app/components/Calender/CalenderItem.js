import React, { useEffect, useState } from "react";
import moment from "moment";
import ScrollContainer from "react-indiana-drag-scroll";
const CalenderItem = ({ item, events, fade = false, current = false }) => {
  const [eventsList, setEventsList] = useState([]);
  useEffect(() => {
    let list = [];
    events.forEach((event) => {
      if (
        moment(event.date).format("DD-MM-YYYY") ===
        moment(item.day).format("DD-MM-YYYY")
      ) {
        list = [...list, event];
      }
    });
    setEventsList(list);
  }, [events]);
  return (
    <div
      className={`calender__item ${current ? "calender__item-current" : ""} ${
        fade ? "calender__item-fade" : ""
      }`}
    >
      <h1>{moment(item?.day).format("DD")}</h1>
      <h4>OUT</h4>
      <ScrollContainer horizontal={false} className="calender__events-list">
        {eventsList.map((event) => (
          <div
            className="calender__events-item"
            key={`event-${event.id || Math.random()}`}
          >
            {event.title}
          </div>
        ))}
      </ScrollContainer>
      <div className={fade ? "calender__item-overlay" : ""} />
    </div>
  );
};

export default CalenderItem;
