import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Row,
  Spinner,
  Alert,
  CardHeader,
  CardBody,
  CardTitle,
  Card,
  CardText,
  CardFooter,
} from "reactstrap";
import { cancelSlot } from "../store/scheduler/actions";
import Login from "./Login";
import NavBar from "./NavBar";



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
  const handleBack = ()=>{
    navigate("/my-bookings");
  }
  
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
    const payload = {CancelKey: reschedulerDataSelected.guid, pxObjClass: reschedulerDataSelected.pxObjClass, Reason: answer}
    dispatch(cancelSlot(payload));
  };
  const storedUser = sessionStorage.getItem('userProfile');
  useEffect(() => {
    if (!userProfile && storedUser ==='null') {
      navigate("/login");
    }
});

if (loader) {
    return <div className="loader">
    <Spinner color="dark">
      Loading...
    </Spinner>
  </div>
  }

  return (
    <>
      <Login />
      {/* <NavBar /> */}
      {/* <Container className="container-border"> */}
        {!pyStatusMessage && (
          <Row  style={{ display: "flex", justifyContent: "center" }}>
            {/* <div className="question-div"> */}
              <Card
                className="my-2"
                style={{
                  width: "700px",
                }}
              >
                <CardHeader
                  style={{ display: "flex", justifyContent: "center", backgroundColor:"white", borderBottom: "none" }}
                >
                  Answer the question
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h5"  style={{ display: "flex", justifyContent: "center" }}>
                    Why would you like to cancel the slot?
                  </CardTitle>
                  <CardText  style={{ display: "flex", justifyContent: "center" }}>
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => updateAnswer(e)}
                    ></input>
                  </CardText>
                </CardBody>
                <CardFooter  style={{ display: "flex", justifyContent: "center",  backgroundColor:"white", borderTop: "none" }}>
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
            <Row>
              <div className="notification-success">
                <Alert color="success" className="min-width-notification">
                  {pyStatusMessage}
                </Alert>
              </div>
            </Row>
            <Row>
              <Col className="appointments">
                <Button color="primary" onClick={() => handleBack()}>
                  Back
                </Button>
              </Col>
            </Row>
          </>
        )}
      {/* </Container> */}
    </>
  );
};

export default ReasonCancel;
