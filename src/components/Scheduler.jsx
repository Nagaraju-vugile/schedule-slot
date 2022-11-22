import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAvailabilities, clearBookedSlots, getAvailabilities } from "../store/scheduler/actions";
import "../styles.css";
import Appointments from "./appointsments";
import { useLocation, useParams } from "react-router-dom";
import { Spinner} from "reactstrap";

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
    dispatch(clearAvailabilities());
    dispatch(getAvailabilities(selectedStartDate, id, query.get("Type")));
  }, []);
  
  useEffect(() => {
    !schedules &&
      dispatch(getAvailabilities(selectedStartDate, id, query.get("Type")));
      dispatch(clearBookedSlots());
  }, [dispatch]);

  if (loader) {
    return (
      <div className="loader">
        <Spinner color="dark">
          Loading...
        </Spinner>
      </div>
    );
  }

  return <Appointments appointments={schedules} />;
}
