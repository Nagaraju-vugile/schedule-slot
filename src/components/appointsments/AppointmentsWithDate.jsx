import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { days, months } from "../../constants";
import { selectedSlotDetails } from "../../store/scheduler/actions";
import "./index.css";

const AppointmentsWithDate = ({ date, timings,appontment, size }) => {

  let dispatch = useDispatch();
  const navigate = useNavigate();
  const updatedDate = new Date(date);
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);

  const handleSelectedSlot = (timing)=>{
    let queryCheck;
    if(query.get('Type')){
      queryCheck = "?Type="+ query.get('Type');
    } else{

      queryCheck = "";
    }
    let idCheck;
    if(id){
      idCheck = id;
    } else{
      idCheck = "";
    }
    const test = [{...timing, pySelected: "true"}];
    const formedTiming = {...appontment,test};
    dispatch(selectedSlotDetails({timing: formedTiming, date}));
    navigate("/scheduler/questions/"+idCheck+queryCheck);
  };

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
        {timings.length > 1 &&
          timings?.map((timing, index) => {
            return (
              index < size &&
              timing?.StartTimeText && (
                <div className="availabilities-slot" key={index}>
                  <button
                    className="timing"
                    onClick={() => handleSelectedSlot(timing)}
                  >
                    {timing?.StartTimeText}
                  </button>
                </div>
              )
            );
          })}
        {timings.length <= 1 && <button className="timing-disabled" disabled>unavailable</button>}
      </div>
    </div>
  );
};

export default AppointmentsWithDate;
