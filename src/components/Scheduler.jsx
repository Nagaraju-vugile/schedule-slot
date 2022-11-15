import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailabilities } from "../store/scheduler/actions";
import "../styles.css";
import Appointments from "./appointsments";
import { useLocation, useParams } from 'react-router-dom';

export default function Scheduler() {
  let dispatch = useDispatch();
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  const stat = useSelector(
    (state) => state?.availabilitiesReducer?.availabilities?.SchedulerList
  );
  const selectedStartDate = useSelector(
    (state) => state?.availabilitiesReducer?.selectedStartDate
  );
  const schedules = stat && stat[0]?.SchedulerDetails?.Schedules;
  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.loadingAvailabilities
  );

  useEffect(() => {
    !schedules &&
      dispatch(getAvailabilities(selectedStartDate, id, query.get("Type")));
  }, [dispatch]);

  if (loader) {
    return <div className="loader">Loading..</div>;
  }

  return <Appointments appointments={schedules} />;
}
