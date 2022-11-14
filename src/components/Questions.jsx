import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import { getSchedulerTypeDetails } from "../store/posts/actions";

const Questions = ()=>{
    let dispatch = useDispatch();
    let { id } = useParams();
    let query = new URLSearchParams(useLocation().search);

    const question = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.Questions[0]?.Question);
    const type = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.Questions[0]?.Type);
    // const type = "radio";
    const [answer, setAnswer] = useState(type.toLowerCase() === ("text") ? "" : "no");
    const availabilities = useSelector(state => state?.availabilitiesReducer?.availabilities);
    const selectedSlotDetails = useSelector(state => state?.availabilitiesReducer?.selectedSlotDetails);
    const updateAnswer =(e)=>{
      if(e.target.type === "text" || e.target.type === "radio" )
      setAnswer(e.target.value);
      else{
        setAnswer(e.target.checked);
      }
    }
    const handleBook = ()=>{
      const formedPayload = {selectedSlotDetails,answer:answer,pxObjClass: availabilities.pxObjClass, pyGUID: availabilities.pyGUID, pyStatusMessage: availabilities.pyStatusMessage, pyStatusValue: availabilities.pyStatusValue, pzLoadTime: availabilities.pzLoadTime, pzPageNameHash: availabilities.pzPageNameHash };
      console.log("formedPayload****", formedPayload)
    }
    useEffect(() => {
        dispatch(getSchedulerTypeDetails());
      }, [dispatch]);

    return  <div className="questions-div">
              <div>{question} </div>
              <div className="questions-section">
                {type !== "radio" && <input type = {type} value={answer} onChange={(e)=>updateAnswer(e)}></input>}
                {type === "radio" && <div onChange={(e)=>updateAnswer(e)}>
                  <label><input type = {type} value="yes" name = "selectAns" checked={answer === "yes"} />Yes</label>
                  <label><input type = {type} value="no" name = "selectAns" checked={answer === "no"} />No</label>
                </div>}

              </div>
              <div className="actions-div">
              <a href={"/scheduler/"+id+"?Type="+query.get('Type')} className="back-button">Back</a>
              <button className="book-slot" onClick={()=>handleBook()} disabled={!answer || answer==="no"}>Book slot</button>
              </div>
            </div>
    
}

export default Questions;