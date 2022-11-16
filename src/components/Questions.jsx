import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import { getPayloadBookSlot } from "../helpers/ui_helper";
import { bookSlot } from "../store/scheduler/actions";

const Questions = ()=>{
    let dispatch = useDispatch();
    let { id } = useParams();
    let query = new URLSearchParams(useLocation().search);
    let queryCheck;
    if(query.get('Type')){
      queryCheck = "?Type="+ query.get('Type');
    } else{
      queryCheck = "";
    }
    const question = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.Questions[0]?.Question);
    const type = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.Questions[0]?.Type);
    const schedulerDetails = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails);
    const [answer, setAnswer] = useState(type.toLowerCase() === ("text") ? "" : type.toLowerCase() === ("radio")?"no":false);
    const selectedSlotDetails = useSelector(state => state?.availabilitiesReducer?.selectedSlotDetails);
    const loader = useSelector(state => state?.availabilitiesReducer?.loadingBookSlot);
    const pyStatusMessage = useSelector(state => state?.availabilitiesReducer?.bookedSlot?.pyStatusMessage);
    const pyStatusValue = useSelector(state => state?.availabilitiesReducer?.bookedSlot?.pyStatusValue);

    
    const updateAnswer =(e)=>{
      if(e.target.type === "text" || e.target.type === "radio" )
      setAnswer(e.target.value);
      else{
        setAnswer(e.target.checked);
      }
    }
    const handleBook = ()=>{
      const payload = getPayloadBookSlot(answer, question, type, selectedSlotDetails, schedulerDetails )
      console.log("payload***********", payload);
      dispatch(bookSlot(payload));
    }

    useEffect(() => {
      setAnswer(type.toLowerCase() === ("text") ? "" : type.toLowerCase() === ("radio")?"no":false)
    }, [pyStatusMessage]);

    if(loader){
      return <div className="loader">Loading..</div>
    }

    return (
      <div className="questions-div">
        <div
          className={
            (pyStatusValue === "200" && "notification-success") ||
            (pyStatusValue === "400" && "notification-error")
          }
        >
          {pyStatusMessage && pyStatusMessage}
        </div>
        <div className="appointments">
          <b>Answer the question</b>
        </div>
        <div>{question} </div>
        <div className="questions-section">
          {type !== "radio" && (
            <input
              type={type}
              value={answer}
              onChange={(e) => updateAnswer(e)}
            ></input>
          )}
          {type === "radio" && (
            <div onChange={(e) => updateAnswer(e)}>
              <label>
                <input
                  type={type}
                  value="yes"
                  name="selectAns"
                  checked={answer === "yes"}
                />
                Yes
              </label>
              <label>
                <input
                  type={type}
                  value="no"
                  name="selectAns"
                  checked={answer === "no"}
                />
                No
              </label>
            </div>
          )}
        </div>
        <div className="actions-div">
          <a href={"/scheduler/" + id + queryCheck} className="back-button">
            Back
          </a>
          <button
            className="book-slot"
            onClick={() => handleBook()}
            disabled={answer === "" || !answer}
          >
            Book slot
          </button>
        </div>
      </div>
    );
    
}

export default Questions;