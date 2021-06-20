import React from "react";
import TimeLabel from "./TimeLabel";
import Event from "./Event";

const Calendar = (props) => {
  const hours = [9,10,11,12,13,14,15,16,17,18,19,20];
  const minutes = ["00","15","30","45"];

  return (
    <div className={"calendar"}>
      {hours.map((hour, hIdx) => (
        minutes.map((minute, mIdx) => (
          <TimeLabel key={""+hIdx+mIdx} hour={hour} minute={minute} row={hIdx * 60 + mIdx * 15}/>
        ))
      ))}

      {props.events.map(e => (
        <Event key={e.id} event={e}/>
      ))}
    </div>)
}

export default Calendar;