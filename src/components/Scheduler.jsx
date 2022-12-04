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
import Appointments from "./appointsments";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Scheduler() {
  let dispatch = useDispatch();

  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  let queryCheck;
  if (query.get("Type")) {
    queryCheck = "?Type=" + query.get("Type");
  } else {
    queryCheck = "";
  }

  let path = useLocation().pathname + queryCheck;
  sessionStorage.setItem("prevLocation", path);

  const testPath = useLocation().pathname.indexOf("re-schedule");
  const schedulerList = useSelector(
    (state) => state?.availabilitiesReducer?.availabilities?.SchedulerList
  );
  const selectedStartDate = useSelector(
    (state) => state?.availabilitiesReducer?.selectedStartDate
  );
  const schedules =
    schedulerList && schedulerList[0]?.SchedulerDetails?.Schedules;
  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.loadingAvailabilities
  );
  const navigate = useNavigate();
  const storedUser = sessionStorage.getItem("userProfile");
  useEffect(() => {
    if (storedUser === "null" || storedUser === null) {
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
    <div
      style={{
        overflow: "hidden",
        display: "block",
        position: "relative",
        paddingBottom: "100px",
        minHeight: "100vh",
      }}
    >
      <Header />
      <NavBar />
      {schedulerList?.map((item, index) => (
        <Appointments
          appointments={item?.SchedulerDetails?.Schedules}
          indexAppointment={index}
          navigateLink={
            testPath < 0
              ? "/scheduler/questions/"
              : "/scheduler/re-schedule/questions/"
          }
          schedulerListData={item}
        />
      ))}
      {(!schedulerList || schedulerList?.length === 0) && (
        <div className="no-availabilities-div">No schedules found</div>
      )}
      <Footer />
    </div>
  );
}
