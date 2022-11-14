import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedulerTypeDetails } from "../store/posts/actions";

const DoctorsList = ()=>{
    let dispatch = useDispatch();
    const schedulerTypes = useSelector(state => state?.availabilitiesReducer?.schedulerTypes?.pxResults);
    useEffect(() => {
        dispatch(getSchedulerTypeDetails());
      }, [dispatch]);

    return schedulerTypes?.map(item=>{
        return <li key={item.SchedulerRefID}><a href = {'/scheduler/'+item.SchedulerRefID+'?Type='+item.Type}>{item.Type} - {item.SchedulerRefID}</a></li>
    })
}

export default DoctorsList;