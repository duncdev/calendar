import React from "react";

const Event = (props) => {
  return (
    <div className={"event"} style={{gridRow:props.event.rowStart + " / " + props.event.rowEnd, backgroundColor:props.event.color}}>
      <span>{props.event.displayTime}</span>
      <span>{props.event.title}</span>
      <span>{props.event.description}</span>
    </div>
  );
}

export default Event;