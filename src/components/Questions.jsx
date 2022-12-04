import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import {
  getPayloadBookRescheduler,
  getPayloadBookSlot,
} from "../helpers/ui_helper";
import { bookSlot } from "../store/scheduler/actions";
import SuccessConfirmation from "./appointsments/SuccessConfirmation";
import Footer from "./Footer";
import Header from "./Header";

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
      (testPath < 0 && "/scheduler/" + idCheck + queryCheck) ||
        "/scheduler/re-schedule/" + idCheck + queryCheck
    );
  };

  useEffect(() => {
    if (!checkAvailabilities) {
      handleBack();
    }
  }, []);

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
  const reschedulerDataSelectedDate = useSelector(
    (state) => state?.availabilitiesReducer?.reschedulerDataSelected
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
    <div className="layout-main">
      <Header />
      {!pyStatusMessage && (
        <Row
          className="appointments"
          style={{ width: "100%", paddingLeft: "2px" }}
        >
          <Card className="my-2 card-border">
            <CardHeader className="card-header">
              {selectedSlotDetails && testPath < 0 && (
                <Row>
                  <Row className="appointments info-sub-header">
                    Please confirm the details and proceed.
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Date:</b>
                    </Col>
                    <Col>{selectedSlotDetails?.date}</Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Time:</b>
                    </Col>
                    <Col>
                      {
                        selectedSlotDetails?.timing?.updatePySelected[0]?.StartTime?.split(
                          ":"
                        )[0]
                      }
                      :
                      {
                        selectedSlotDetails?.timing?.updatePySelected[0]?.StartTime?.split(
                          ":"
                        )[1]
                      }
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Type:</b>
                    </Col>
                    <Col>{selectedSlotDetails?.timing?.Type}</Col>
                  </Row>
                </Row>
              )}
              {reschedulerDataSelectedDate && testPath > 0 && (
                <Row>
                  <Row className="appointments info-sub-header">
                    Please confirm the details and proceed.
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Date:</b>
                    </Col>
                    <Col>{reschedulerDataSelectedDate?.date}</Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Time:</b>
                    </Col>
                    <Col>
                      {reschedulerDataSelectedDate?.StartTime?.split(":")[0]}:
                      {reschedulerDataSelectedDate?.StartTime?.split(":")[1]}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Type:</b>
                    </Col>
                    <Col>{reschedulerDataSelectedDate?.type}</Col>
                  </Row>
                </Row>
              )}
            </CardHeader>
            <CardBody className="padding-top-style">
              <div className="appointments word-break-style">{question}</div>
              <div className="appointments">
                {type?.toLowerCase() === "text" && (
                  <div className="padding-top-content">
                    <Input
                      rows="4"
                      cols="50"
                      value={answer}
                      onChange={(e) => updateAnswer(e)}
                      type="textarea"
                      name="text"
                      id="exampleText"
                    />
                  </div>
                )}
                {type?.toLowerCase() === "boolean" && (
                  <div onChange={(e) => updateAnswer(e)}>
                    <Label>
                      <Input type="radio" name="selectAns" value="yes" />
                      Yes
                    </Label>
                    <Label>
                      <Input type="radio" name="selectAns" value="no" />
                      No
                    </Label>
                  </div>
                )}
              </div>
            </CardBody>
            <CardFooter className="card-footer">
              <Button color="primary" onClick={() => handleBack()}>
                Back
              </Button>
              <Button
                color="success"
                className="book-slot"
                onClick={() => handleBook()}
                disabled={answer === ""}
              >
                {(testPath < 0 && "Book") || "Reschedule"}
              </Button>
            </CardFooter>
          </Card>
        </Row>
      )}
      {pyStatusMessage && (
        <>
          <div className="notification-success">
            <Alert color="success" className="min-width-notification">
              {pyStatusMessage}
            </Alert>
          </div>
          <SuccessConfirmation />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Questions;
