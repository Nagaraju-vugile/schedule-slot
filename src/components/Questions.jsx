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

  const bookedSlotEmail = useSelector(
    (state) =>
      state?.availabilitiesReducer?.bookedSlot?.SchedulerList[0]
        ?.SchedulerDetails?.pyEmail
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

  const questionsData = useSelector(
    (state) =>
      state?.availabilitiesReducer?.selectedSlotDetails?.schedulerListData
        ?.SchedulerDetails?.Questions
  );

  const [questionsDataUpdate, setQuestionsDataUpdate] = useState(questionsData);

  const schedulerDetails = useSelector(
    (state) =>
      state?.availabilitiesReducer?.availabilities?.SchedulerList[0]
        ?.SchedulerDetails
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

  const updateAnswer = (e, indexVal) => {
    const updateData = questionsDataUpdate.map((item, index)=>{
      if(index === indexVal){
        return {...item, Answer:e.target.value}
      }
      return item;
    });
    setQuestionsDataUpdate(updateData)
  };
  const handleBook = () => {
    if (testPath >= 0) {
      const payload = getPayloadBookRescheduler(
        questionsDataUpdate,
        selectedSlotDetails,
        schedulerDetails,
        reschedulerDataSelected,
        userProfile
      );
      dispatch(bookSlot(payload, 2));
    } else {
      const payload = getPayloadBookSlot(
        questionsDataUpdate,
        selectedSlotDetails,
        schedulerDetails
      );
      dispatch(bookSlot(payload, 1));
    }
  };

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
        <Row className="question-section-card">
          <Card className="my-2 card-border">
            <Row>
              <Col xs="3">
                <Button onClick={() => handleBack()} className="back-button">
                  Back
                </Button>
              </Col>
              <Col xs="9" style={{ paddingTop: "12px" }}>
                <div>
                  <h5>Please confirm the details</h5>
                </div>
              </Col>
            </Row>
            <CardHeader className="card-header">
              {selectedSlotDetails && testPath < 0 && (
                <Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Selected date:</b>
                    </Col>
                    <Col>{selectedSlotDetails?.date}</Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Selected time:</b>
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
                      <b>Selected type:</b>
                    </Col>
                    <Col>{selectedSlotDetails?.timing?.Type}</Col>
                  </Row>
                </Row>
              )}
              {reschedulerDataSelectedDate && testPath > 0 && (
                <Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Previous date:</b>
                    </Col>
                    <Col>{reschedulerDataSelectedDate?.date}</Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Previous time:</b>
                    </Col>
                    <Col>
                      {reschedulerDataSelectedDate?.StartTime?.split(":")[0]}:
                      {reschedulerDataSelectedDate?.StartTime?.split(":")[1]}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Previous type:</b>
                    </Col>
                    <Col>{reschedulerDataSelectedDate?.type}</Col>
                  </Row>
                </Row>
              )}
            </CardHeader>
            <CardBody className="padding-top-style">
              <div
                style={{
                  borderBottom: "1px solid rgb(237 205 237)",
                  marginTop: "4px",
                  marginBottom: "4px",
                }}
              />

              {questionsDataUpdate?.map((item, index) => (
                <>
                  <div className="appointments word-break-style">
                    {item?.Question}
                  </div>
                  <div className="appointments">
                    {item.Type?.toLowerCase() === "text" && (
                      <div className="padding-top-content">
                        <Input
                          rows="4"
                          cols="50"
                          value={item.Answer}
                          onChange={(e) => updateAnswer(e, index)}
                          type="textarea"
                          name="text"
                          id="answer"
                          placeholder="Provide you answer.."
                        />
                      </div>
                    )}
                    {item.Type?.toLowerCase() === "boolean" && (
                      <div onChange={(e) => updateAnswer(e, index)}>
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
                </>
              ))}
            </CardBody>
            <CardFooter className="card-footer">
              <Button
                color="success"
                className="book-slot"
                onClick={() => handleBook()}
              >
                {(testPath < 0 && "Book") || "Reschedule"}
              </Button>
            </CardFooter>
          </Card>
        </Row>
      )}
      {pyStatusMessage && (
        <>
          <Row>
            <div className="appointments">
              <h4>Confirmed! </h4>
            </div>
          </Row>
          <div className="notification-success">
            <Alert color="success" className="min-width-notification">
              {(testPath < 0 &&
                `Your slot is scheduled with ${bookedSlotEmail}`) ||
                `Your slot is rescheduled with ${bookedSlotEmail}`}
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
