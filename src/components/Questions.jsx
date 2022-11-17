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
    let idCheck;
    if(id){
      idCheck = id;
    } else{
      idCheck = "";
    }
    const question = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.Questions[0]?.Question);
    const type = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.Questions[0]?.Type);
    const schedulerDetails = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails);
    const [answer, setAnswer] = useState(type.toLowerCase() === ("text") ? "" : type.toLowerCase() === ("boolean")?"no":"no");
    const selectedSlotDetails = useSelector(state => state?.availabilitiesReducer?.selectedSlotDetails);
    const loader = useSelector(state => state?.availabilitiesReducer?.loadingBookSlot);
    const pyStatusMessage = useSelector(state => state?.availabilitiesReducer?.bookedSlot?.pyStatusMessage);
    const pyStatusValue = useSelector(state => state?.availabilitiesReducer?.bookedSlot?.pyStatusValue);
    const pyEmail = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.pyEmail);
    const pyFullName = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.pyFullName);
    const dateSelected = useSelector(state => state?.availabilitiesReducer?.selectedSlotDetails?.date);
    const slotSelected = useSelector(state => state?.availabilitiesReducer?.selectedSlotDetails?.timing?.test[0].StartTimeText);
    const updateAnswer =(e)=>{
      setAnswer(e.target.value);
    }
    const handleBook = ()=>{
      const payload = getPayloadBookSlot(answer, question, type, selectedSlotDetails, schedulerDetails )
      dispatch(bookSlot(payload));
    }

    useEffect(() => {
      setAnswer(type.toLowerCase() === ("text") ? "" : type.toLowerCase() === ("radio")?"no":false)
    }, [pyStatusMessage]);

    if(loader){
      return <div className="loader">Loading..</div>
    }

    return (
      <div className="main-questions-div">
        <div className="profile-info">
          <div className="info-value">
            <span className="info-sub-header">Email: </span>{pyEmail}
          </div>
          <div>
            <span className="info-sub-header"> FullName: </span>
            {pyFullName}
          </div>
          <div>
            <span className="info-sub-header"> Selected date: </span>
            {dateSelected}
          </div>
          <div>
            <span className="info-sub-header"> Selected slot: </span>
            {slotSelected}
          </div>
        </div>
        <div className="questions-div">
          {pyStatusMessage && (
            <div
              className={
                (pyStatusValue === "200" && "notification-success") ||
                (pyStatusValue === "400" && "notification-error")
              }
            >
              {pyStatusMessage}
            </div>
          )}
          <div className="appointments">
            <b>Answer the question</b>
          </div>
          <div className="question-div">{question} </div>
          <div className="questions-section">
            {type.toLowerCase() === "text" && (
              <input
                type={type}
                value={answer}
                onChange={(e) => updateAnswer(e)}
              ></input>
            )}
            {type.toLowerCase() === "boolean" && (
              <div onChange={(e) => updateAnswer(e)}>
                <label>
                  <input
                    type="radio"
                    value="yes"
                    name="selectAns"
                    checked={answer === "yes"}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
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
            <a href={"/scheduler/" + idCheck + queryCheck} className="back-button">
              Back
            </a>
            <button
              className="book-slot"
              onClick={() => handleBook()}
              disabled={answer === ""}
            >
              Book slot
            </button>
          </div>
        </div>
      </div>
    );
    
}

export default Questions;