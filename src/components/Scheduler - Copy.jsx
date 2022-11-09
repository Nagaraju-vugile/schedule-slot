import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailabilities, selectedDataDisplayT } from "../store/posts/actions";
import "../styles.css";
import Appointments from "./appointsments";

export default function Scheduler() {
  let dispatch = useDispatch();
  const stat = useSelector(state => state?.availabilitiesReducer?.availabilities?.data?.SchedulerList[0]?.SchedulerDetails?.Schedules);
  const availableAppointments = useSelector(state => state?.availabilitiesReducer?.availabilities?.data);
  const selectedDate = useSelector(state => state?.availabilitiesReducer?.selectedDate);
    // console.log("state***",stat)
  const nextDays = (date, days)=>{
    return new Date(new Date(date).getTime()+days * 24*60*60*1000);
  };
  const maxTimeSlot = nextDays(new Date(selectedDate), 6);

  const formattedData = maxTimeSlot&&availableAppointments&&Object.keys(availableAppointments)?.filter(item=> new Date(item)>= new Date(selectedDate)&&new Date(item)<= new Date(maxTimeSlot));
  const obj1 = {};
  for(var prop in formattedData){
    if(availableAppointments.hasOwnProperty(formattedData[prop])){
      obj1[formattedData[prop]] = availableAppointments[formattedData[prop]];
    }
  };
   // const availableAppointments = useSelector(state => state?.availabilitiesReducer?.availabilities?.data);
  // const selectedDate = useSelector(state => state?.availabilitiesReducer?.selectedDate);
    // console.log("stat***",stat&&stat[0]?.SchedulerDetails?.Schedules);
    // console.log("prevDateSelected****",prevDateSelected)
  // const nextDays = (date, days)=>{
  //   return new Date(new Date(date).getTime()+days * 24*60*60*1000);
  // };
  // const maxTimeSlot = nextDays(new Date(selectedDate), 6);

  // const formattedData = maxTimeSlot&&availableAppointments&&Object.keys(availableAppointments)?.filter(item=> new Date(item)>= new Date(selectedDate)&&new Date(item)<= new Date(maxTimeSlot));
  // const formattedData = maxTimeSlot&&stat?.filter(item=> new Date(item.ScheduledDate)>= new Date(selectedDate)&&new Date(item.ScheduledDate)<= new Date(maxTimeSlot));
  // console.log("Object.keys(obj1)[2]**",Object.keys(obj1))
  useEffect(() => {
    dispatch(getAvailabilities());
    dispatch(selectedDataDisplayT(Object.keys(obj1)[2]))
  }, [ dispatch]);
  return <Appointments appointments={obj1} />;
}
