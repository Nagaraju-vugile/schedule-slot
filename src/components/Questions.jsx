import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedulerTypeDetails } from "../store/posts/actions";

const Questions = ()=>{
    let dispatch = useDispatch();
    const [answer, setAnswer] = useState();
    const Question = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList[0]?.SchedulerDetails?.Questions[0]?.Question);
    const availabilities = useSelector(state => state?.availabilitiesReducer?.availabilities);
    const selectedSlotDetails = useSelector(state => state?.availabilitiesReducer?.selectedSlotDetails);

    const updateAnswer =(e)=>{
      setAnswer(e.target.value);
    }
    const handleBook = ()=>{
      const formedPayload = {selectedSlotDetails,answer:answer,pxObjClass: availabilities.pxObjClass, pyGUID: availabilities.pyGUID, pyStatusMessage: availabilities.pyStatusMessage, pyStatusValue: availabilities.pyStatusValue, pzLoadTime: availabilities.pzLoadTime, pzPageNameHash: availabilities.pzPageNameHash };
    }
    useEffect(() => {
        dispatch(getSchedulerTypeDetails());
      }, [dispatch]);

    return  <div className="questions-div">
              <div>{Question} </div>
              <div className="questions-section"><textarea rows="5" cols="45" onChange={(e)=>updateAnswer(e)}></textarea> </div>
              <div className="actions-div">
                <button className="book-slot" onClick={()=>handleBook()} disabled={!answer}>Next</button>
              </div>
            </div>
    
}

export default Questions;