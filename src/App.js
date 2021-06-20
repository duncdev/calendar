import React from "react";
import Calendar from "./components/Calendar";
import "./scss/app.scss";

const App = () => {
  
  let titles = [
    "Daily standup",
    "Project planning",
    "Manufacturing backlog",
    "Credit status update",
    "Rates status update",
    "COO status update",
    "Team meeting",
    "Interview",
    "Client meeting",
    "Data provider meeting"];

  let colors = [
      "#e1f5fe",
      "#b3e5fc",
      "#81d4fa",
      "#4fc3f7",
      "#29b6f6",
      "#03a9f4",
      "#039be5",
      "#0288d1",
      "#0277bd",
      "#01579b"
    ];

  let events = [];
  
  for (let i=0; i < 10; i++) {
    let e = {};
    e.id = i;
    e.hour = Math.floor(Math.random() * 11 + 9);
    e.minute = Math.floor(Math.random() * 60);
    e.displayTime = (e.hour < 13 ? e.hour : e.hour - 12) + ":" + (e.minute < 10 ? "0":"") + e.minute + " " + (e.hour < 12 ? "AM":"PM");
    e.rowStart = (e.hour - 9) * 60 + e.minute + 1;
    e.rowEnd = e.rowStart + 14 + Math.floor(Math.random() * 60);
    e.title = titles.splice(Math.floor(Math.random()*titles.length),1);
    e.description = "(" + (e.rowEnd-e.rowStart) + " minutes)";
    e.color = colors.splice(Math.floor(Math.random()*colors.length),1);
    events.push(e);
  } 
  events.sort((a,b) => {return (a.rowStart - b.rowStart)});

  return (
    <div>
      <Calendar events={events}/>      
    </div>
  );
}

export default App;
