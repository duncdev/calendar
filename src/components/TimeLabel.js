import React from "react";

const TimeLabel = (props) => {
  let startRow = props.row;
  startRow = startRow > 0 ? startRow : 1;

  const displayHour = props.hour > 12 ? props.hour - 12 : props.hour;
  const ampm = props.hour < 12 ? "AM":"PM";

  return (
    <div className={"timeLabel"} style={{gridRow: startRow}}>
      <span>{displayHour}:{props.minute} {ampm}</span>
    </div>
  );
}

export default TimeLabel;