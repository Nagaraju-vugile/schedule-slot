import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Spinner, Button, Row, Col, Container, Card } from "reactstrap";
import {
  clearAvailabilities,
  clearBookedSlots,
  clearError,
  getAvailabilities,
} from "../store/scheduler/actions";
import "../styles.css";
import Appointments from "./appointsments";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import { IoIosArrowBack } from "react-icons/io";
import { messages } from "../constants";

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

  const handleBack = () => {
    navigate((testPath < 0 && "/schedulers-list") || "/my-bookings");
  };

  useEffect(() => {
    if (storedUser === "null" || storedUser === null) {
      navigate("/login");
    }
  });
  useEffect(() => {
    dispatch(clearAvailabilities());
    dispatch(getAvailabilities(selectedStartDate, id, query.get("Type")));
    dispatch(clearError());
  }, []);

  useEffect(() => {
    !schedules &&
      dispatch(getAvailabilities(selectedStartDate, id, query.get("Type")));
    dispatch(clearBookedSlots());
  }, [dispatch]);

  return (
    <div className="layout-main">
      <Header />
      <NavBar />
      <Container className="container-scheduler">
        <Row>
          <Col xs="4">
            <Button
              onClick={() => handleBack()}
              className="back-button"
              color="link"
            >
              <IoIosArrowBack className="next-button-svg" />
              {messages.buttons.back}
            </Button>
          </Col>
        </Row>
      </Container>
      {(loader && (
        <div className="loader">
          <Spinner animation="border" variant="warning">
            {messages.labels.loading}
          </Spinner>
        </div>
      )) || (
        <><Card  style={{
          boxShadow: "rgb(0 0 0 / 16%) 1px 1px 10px",
          margin:"10px",
          backgroundColor: "#fbfbfb"
        }}>
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
            <div className="no-availabilities-div">{messages.errorMessages.noSlots}</div>
          )}
          </Card>
        </>
      )}

      <Footer />
    </div>
  );
}
