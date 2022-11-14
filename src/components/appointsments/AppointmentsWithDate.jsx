import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { selectedSlotDetails } from "../../store/posts/actions";
import "./index.css";

const AppointmentsWithDate = ({ date, timings, size }) => {
  console.log("timings****", timings);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const updatedDate = new Date(date);
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  const handleSelectedSlot = (timing)=>{
    const formedTiming = {...timing, pyselected: true};
    dispatch(selectedSlotDetails({timing: formedTiming, date}));
    navigate("/scheduler/questions/"+id+"?Type="+query.get('Type'));
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
        {timings.length>1 && timings?.map((timing, index) => {
          return index<size && timing?.StartTimeText&&<div className="availabilities-slot" key={index}><button className="timing" onClick={()=>handleSelectedSlot(timing)}>{timing?.StartTimeText}</button></div>;
        }) || <button className="timing">unavailable</button>}
      </div>
    </div>
  );
};

export default AppointmentsWithDate;
