import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getAvailabilities } from "../store/posts/actions";
import "../styles.css";
import Appointments from "./appointsments";

export default function Scheduler() {
  let dispatch = useDispatch();
  let { id } = useParams();
  const SchedulerList = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList);
  const prevDateSelected = useSelector(state => state?.availabilitiesReducer?.prevDateSelected);
  const scheduledData = SchedulerList&&SchedulerList[0]?.SchedulerDetails?.Schedules;

  useEffect(() => {
    !scheduledData&&dispatch(getAvailabilities(prevDateSelected, id));
  }, [dispatch]);
     
  return  <Appointments appointments={scheduledData} />
}
