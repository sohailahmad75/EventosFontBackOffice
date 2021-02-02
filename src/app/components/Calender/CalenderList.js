import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import CalenderItem from "./CalenderItem";
import ScrollContainer from "react-indiana-drag-scroll";
import PropTypes from "prop-types";
const CalenderList = ({ events, months = 2 }) => {
  const [previousDays, setPreviousDays] = useState([]);
  const [nextDays, setNextDays] = useState([]);
  const myRef = useRef(null);
  const myContainerRef = useRef(null);
  useEffect(() => {
    let prev = [];
    let next = [];
    const days = ((months < 1 ? 2 : months) * 30) / 2;
    for (let i = days; i > 0; i--) {
      prev = [
        ...prev,
        {
          day: moment().subtract(i, "day"),
        },
      ];
    }
    for (let i = 1; i <= days; i++) {
      next = [
        ...next,
        {
          day: moment().add(i, "day"),
        },
      ];
    }
    setPreviousDays(prev);
    setNextDays(next);
  }, []);
  useEffect(() => {
    if (previousDays.length > 0 && nextDays.length > 0) {
      myRef?.current?.scrollIntoView();
      const scrolled = myContainerRef.current.scrollLeft;
      const elementWidth = myRef?.current.offsetWidth;
      myContainerRef.current.scrollTo({
        behavior: "smooth",
        left: scrolled + elementWidth * 4,
      });
    }
  }, [previousDays, nextDays]);

  return (
    <ScrollContainer
      innerRef={myContainerRef}
      vertical={false}
      className="calender__list"
    >
      {previousDays.map((pDay) => (
        <CalenderItem
          item={pDay}
          events={events}
          key={`prev-${Math.random()}`}
          fade
        />
      ))}
      <div ref={myRef}>
        <CalenderItem
          item={{
            day: moment(),
          }}
          events={events}
          current
        />
      </div>
      {nextDays.map((nDay) => (
        <CalenderItem
          item={nDay}
          events={events}
          key={`next-${Math.random()}`}
        />
      ))}
    </ScrollContainer>
  );
};

CalenderItem.propTypes = {
  events: PropTypes.array.isRequired,
  months: PropTypes.number,
};
export default CalenderList;
