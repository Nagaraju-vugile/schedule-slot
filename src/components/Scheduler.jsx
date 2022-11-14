import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailabilities } from "../store/posts/actions";
import "../styles.css";
import Appointments from "./appointsments";
// import { ImSpinner } from "react-icons/im";
import { useLocation, useParams } from 'react-router-dom';


export default function Scheduler() {
  let dispatch = useDispatch();
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  console.log("************", query.get("Type"))
  const stat = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList);
  const prevDateSelected = useSelector(state => state?.availabilitiesReducer?.prevDateSelected);
  const formattedData = stat&&stat[0]?.SchedulerDetails?.Schedules;
 
  const nextDays = (date, days)=>{
    return new Date(new Date(date).getTime()+days * 24*60*60*1000);
  };
  const nextDate = nextDays(new Date(prevDateSelected), 5);

  useEffect(() => {
    !formattedData&&dispatch(getAvailabilities(prevDateSelected, nextDate, id, query.get("Type")));
  }, [dispatch]);
     
  return  <Appointments appointments={formattedData} />
}
