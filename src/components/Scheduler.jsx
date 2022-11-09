import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailabilities } from "../store/posts/actions";
import "../styles.css";
import Appointments from "./appointsments";
// import { ImSpinner } from "react-icons/im";


export default function Scheduler() {
  let dispatch = useDispatch();
  const stat = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList);
  const prevDateSelected = useSelector(state => state?.availabilitiesReducer?.prevDateSelected);
  const formattedData = stat&&stat[0]?.SchedulerDetails?.Schedules;
 
  const nextDays = (date, days)=>{
    return new Date(new Date(date).getTime()+days * 24*60*60*1000);
  };
  const nextDate = nextDays(new Date(prevDateSelected), 5);

  useEffect(() => {
    !formattedData&&dispatch(getAvailabilities(prevDateSelected, nextDate));
  }, [dispatch]);
     
  return  <Appointments appointments={formattedData} />
}
