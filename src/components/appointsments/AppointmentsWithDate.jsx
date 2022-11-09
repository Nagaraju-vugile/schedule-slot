import React, {useState} from "react";
import "./index.css";

const AppointmentsWithDate = ({ date, timings, size }) => {
  const updatedDate = new Date(date);
  const [count, setCount] = useState(2);
  const handleBookAppointment = ()=>{
  }
  
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  return (
    <div className="availabilities-day">
      <div className="availabilities-day-title">
        <div className="availabilities-day-name">
          <b>{days[updatedDate.getDay()]}</b>
        </div>
        <div className="availabilities-day-date">
        {months[updatedDate.getMonth()]}. {updatedDate.getDate()}
        </div>
      </div>
      <div className="availabilities-slots">
        {timings?.map((timing, index) => {
          return index<size && timing?.StartTimeText&&<div className="availabilities-slot" key={timing}><button className="timing" onClick={()=>handleBookAppointment()}>{timings[index]&&timing.StartTimeText}</button></div>;
        })}
      </div>
    </div>
  );
};

export default AppointmentsWithDate;
