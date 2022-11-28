import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Input,
  Row,
  Spinner,
} from "reactstrap";
import { cancelSlot } from "../store/scheduler/actions";
import Login from "./Login";

const ReasonCancel = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  // let { id } = useParams();
  // let query = new URLSearchParams(useLocation().search);
  // let queryCheck;
  // if (query.get("Type")) {
  //   queryCheck = "?Type=" + query.get("Type");
  // } else {
  //   queryCheck = "";
  // }
  // let idCheck;
  // if (id) {
  //   idCheck = id;
  // } else {
  //   idCheck = "";
  // }
  const [answer, setAnswer] = useState("");

  const updateAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const handleBack = () => {
    navigate("/my-bookings");
  };

  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );

  const reschedulerDataSelected = useSelector(
    (state) => state?.availabilitiesReducer?.reschedulerDataSelected
  );

  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.cancelSlotLoader
  );
  const pyStatusMessage = useSelector(
    (state) => state?.availabilitiesReducer?.cancelSlot?.pyStatusMessage
  );

  const handleCancel = () => {
    const payload = {
      CancelKey: reschedulerDataSelected.guid,
      pxObjClass: reschedulerDataSelected.pxObjClass,
      Reason: answer,
    };
    dispatch(cancelSlot(payload));
  };
  const storedUser = sessionStorage.getItem("userProfile");
  useEffect(() => {
    if (!userProfile && storedUser === "null") {
      navigate("/login");
    }
  });

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
      {/* <NavBar /> */}
      {/* <Container className="container-border"> */}
      {!pyStatusMessage && (
        <Row className="appointments">
          {/* <div className="question-div"> */}
          <Card
            className="my-2"
            style={{
              width: "700px",
            }}
          >
            <CardHeader
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
                borderBottom: "none",
              }}
            >
              {reschedulerDataSelected && (
                <Row>
                  <Row className="appointments info-sub-header">
                    <div className="appointments">
                      <h5>Are you sure you want to cancel the slot? </h5>{" "}
                    </div>
                    Please confirm the details and proceed.
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Date:</b>
                    </Col>
                    <Col> {reschedulerDataSelected?.date}</Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Time:</b>
                    </Col>
                    <Col>
                      {reschedulerDataSelected?.StartTime?.split(":")[0]}:
                      {reschedulerDataSelected?.StartTime?.split(":")[1]}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      <b>Type: </b>
                    </Col>
                    <Col>{reschedulerDataSelected?.type}</Col>
                  </Row>
                </Row>
              )}
            </CardHeader>
            <CardBody style={{ paddingTop: "0px" }}>
              <CardTitle tag="h6" className="appointments">
                Why would you like to cancel the slot?
              </CardTitle>
              <CardText className="appointments">
                {/* <input
                  type="text"
                  value={answer}
                  onChange={(e) => updateAnswer(e)}
                ></input> */}
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
                  {/* <textarea
                    rows="4"
                    cols="50"
                    value={answer}
                    onChange={(e) => updateAnswer(e)}
                  >
                    Hello there, this is some text in a text area
                  </textarea> */}
                </div>
              </CardText>
            </CardBody>
            <CardFooter
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
                borderTop: "none",
              }}
            >
              <Button color="primary" onClick={() => handleBack()}>
                Back
              </Button>
              <Button
                color="danger"
                className="book-slot"
                onClick={() => handleCancel()}
                disabled={answer === ""}
              >
                Cancel slot
              </Button>
            </CardFooter>
          </Card>
          {/* <Col>
                <div className="question-div">
                  <b>Answer the question</b>
                </div>
                <div className="question-div">
                  Why would you like to cancel the slot?
                </div>
                <div className="question-div">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => updateAnswer(e)}
                  ></input>
                </div>
                <div className="actions-div">
                  <Button color="primary" onClick={() => handleBack()}>
                    Back
                  </Button>
                  <Button
                    color="success"
                    className="book-slot"
                    onClick={() => handleCancel()}
                    disabled={answer === ""}
                  >
                    Cancel slot
                  </Button>
                </div>
              </Col> */}
          {/* </div> */}
        </Row>
      )}
      {pyStatusMessage && (
        <>
          <div className="notification-success">
            <Alert color="success" className="min-width-notification">
              {pyStatusMessage}
            </Alert>
          </div>
          <div className="appointments">
            <Card
              className="my-2"
              style={{
                width: "700px",
              }}
            >
              {/* <div className="notification-success">
      <Alert color="success" className="min-width-notification">
        {pyStatusMessage}
      </Alert>
    </div> */}
              <CardFooter
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderTop: "none",
                }}
              >
                <div>
                  <span className="another-slot-hint">
                    Please go back to cancel another slot
                  </span>
                  <Button color="primary" onClick={() => handleBack()}>
                    Back
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
      {/* </Container> */}
    </>
  );
};

export default ReasonCancel;
