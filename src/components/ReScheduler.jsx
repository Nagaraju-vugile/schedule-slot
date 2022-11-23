import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import {
  clearAvailabilities,
  clearBookedSlots,
  getAvailabilities,
} from "../store/scheduler/actions";
import "../styles.css";
// import Appointments from "./rescheduleAppointments";
import Appointments from "./appointsments";
import Login from "./Login";

export default function ReScheduler() {
  let dispatch = useDispatch();
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  const schedulerList = useSelector(
    (state) => state?.availabilitiesReducer?.availabilities?.SchedulerList
  );
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
  const navigate = useNavigate();
  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );

  const storedUser = sessionStorage.getItem("userProfile");
  useEffect(() => {
    if (!userProfile && storedUser === "null") {
      navigate("/login");
    }
  });
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
        <Spinner color="dark">Loading...</Spinner>
      </div>
    );
  }

  return (
    <>
      <Login />
      {schedulerList?.map((item, index) => (
        <Appointments
          appointments={item?.SchedulerDetails?.Schedules}
          indexAppointment={index}
          navigateLink={"/scheduler/re-schedule/questions/"}
          schedulerListData={item}
          key={index}
        />
      ))}
      ;
    </>
  );
  // return <><Login /> {schedulerList?.map((item, index) => (
  //   <Appointments appointments={item?.SchedulerDetails?.Schedules} indexAppointment={index} />
  // ))};
  // </>
}
