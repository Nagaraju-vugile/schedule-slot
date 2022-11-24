import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Col, Container, Row, Spinner } from "reactstrap";
import {
  getPayloadBookRescheduler,
  getPayloadBookSlot,
} from "../helpers/ui_helper";
import { bookSlot } from "../store/scheduler/actions";
import SuccessConfirmation from "./appointsments/SuccessConfirmation";
import Login from "./Login";

const Questions = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  const testPath = useLocation().pathname.indexOf("re-schedule");
  let queryCheck;
  if (query.get("Type")) {
    queryCheck = "?Type=" + query.get("Type");
  } else {
    queryCheck = "";
  }
  let idCheck;
  if (id) {
    idCheck = id;
  } else {
    idCheck = "";
  }

  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );

  const checkAvailabilities = useSelector(
    (state) => state?.availabilitiesReducer?.availabilities
  );

  const handleBack = () => {
    navigate(
      (testPath < 0 && "/scheduler/"+ idCheck + queryCheck) ||
        "/scheduler/re-schedule/" + idCheck + queryCheck
    );
  };

  useEffect(() => {
    if (!checkAvailabilities) {
      handleBack();
    }
  }, []);

  const storedUser = sessionStorage.getItem("userProfile");
  useEffect(() => {
    if (!userProfile && storedUser === "null") {
      navigate("/login");
    }
  });

  const availabilities = useSelector(
    (state) => state?.availabilitiesReducer?.availabilities?.SchedulerList
  );
  const indexType = availabilities?.map(
    (item) => item.SchedulerDetails.Schedules[0]?.Type
  );

  const selectedSlotDetails = useSelector(
    (state) => state?.availabilitiesReducer?.selectedSlotDetails
  );
  const question = useSelector(
    (state) =>
      state?.availabilitiesReducer?.selectedSlotDetails?.schedulerListData
        ?.SchedulerDetails?.Questions[0]?.Question
  );
  const type = useSelector(
    (state) =>
      state?.availabilitiesReducer?.selectedSlotDetails?.schedulerListData
        ?.SchedulerDetails?.Questions[0]?.Type
  );
  // const question = useSelector(
  //   (state) =>
  //   state?.availabilitiesReducer?.availabilities?.SchedulerList[0]
  //       ?.SchedulerDetails?.Questions[0]?.Question
  // );
  // const type = useSelector(
  //   (state) =>
  //     state?.availabilitiesReducer?.availabilities?.SchedulerList[0]
  //       ?.SchedulerDetails?.Questions[0]?.Type
  // );
  const schedulerDetails = useSelector(
    (state) =>
      state?.availabilitiesReducer?.availabilities?.SchedulerList[0]
        ?.SchedulerDetails
  );
  const [answer, setAnswer] = useState(
    type?.toLowerCase() === "text"
      ? ""
      : type?.toLowerCase() === "boolean"
      ? "no"
      : "no"
  );

  const reschedulerDataSelected = useSelector(
    (state) => state?.availabilitiesReducer?.reschedulerDataSelected?.guid
  );

  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.loadingBookSlot
  );
  const pyStatusMessage = useSelector(
    (state) => state?.availabilitiesReducer?.bookedSlot?.pyStatusMessage
  );

  const updateAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const handleBook = () => {
    if (testPath >= 0) {
      const payload = getPayloadBookRescheduler(
        answer,
        question,
        type,
        selectedSlotDetails,
        schedulerDetails,
        reschedulerDataSelected,
        userProfile
      );
      dispatch(bookSlot(payload, 2));
    } else {
      const payload = getPayloadBookSlot(
        answer,
        question,
        type,
        selectedSlotDetails,
        schedulerDetails
      );
      dispatch(bookSlot(payload, 1));
    }
  };

  useEffect(() => {
    setAnswer(
      type?.toLowerCase() === "text"
        ? ""
        : type?.toLowerCase() === "radio"
        ? "no"
        : false
    );
  }, [pyStatusMessage]);

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
      <Container className="container-border">
        {!pyStatusMessage && (
          <Row>
            <div className="question-div">
              <Col>
                <div className="question-div">
                  <b>Answer the question</b>
                </div>
                <div className="question-div">{question} </div>
                <div className="question-div">
                  {type?.toLowerCase() === "text" && (
                    <input
                      type={type}
                      value={answer}
                      onChange={(e) => updateAnswer(e)}
                    ></input>
                  )}
                  {type?.toLowerCase() === "boolean" && (
                    <div onChange={(e) => updateAnswer(e)}>
                      <label>
                        <input
                          type="radio"
                          value="yes"
                          name="selectAns"
                          checked={answer === "yes"}
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="no"
                          name="selectAns"
                          checked={answer === "no"}
                        />
                        No
                      </label>
                    </div>
                  )}
                </div>
                <div className="actions-div">
                  <Button color="primary" onClick={() => handleBack()}>
                    Back
                  </Button>
                  <Button
                    color="success"
                    className="book-slot"
                    onClick={() => handleBook()}
                    disabled={answer === ""}
                  >
                   {testPath < 0 && "Book" || "Reschedule" }
                  </Button>
                </div>
              </Col>
            </div>
          </Row>
        )}
        {pyStatusMessage && (
          <>
            {/* <Row> */}
              <div className="notification-success">
                <Alert color="success" className="min-width-notification">
                  {pyStatusMessage}
                </Alert>
              </div>
            {/* </Row> */}
            <SuccessConfirmation />
          </>
        )}
      </Container>
    </>
  );
};

export default Questions;
