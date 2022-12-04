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
import ConfirmationModal from "./ConfirmationModal";
import Footer from "./Footer";
import Header from "./Header";

const ReasonCancel = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [modal, setModal] = useState(false);

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

  const toggle = () => {
    setModal(!modal);
  };

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

  if (!reschedulerDataSelected) {
    handleBack();
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

      {!pyStatusMessage && (
        <Row className="appointments" style={{ minHeight: "150px" }}>
          <Card
            className="my-2 card-border"
            style={{ justifyContent: "center" }}
          >
            <CardHeader className="card-header">
              {reschedulerDataSelected && (
                <Row>
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
            <CardBody className="padding-top-style">
              <CardTitle tag="h6" className="appointments">
                Why would you like to cancel the slot?
              </CardTitle>
              <CardText className="appointments">
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
              </CardText>
            </CardBody>
            <CardFooter className="card-header">
              <Button color="primary" onClick={() => handleBack()}>
                Back
              </Button>
              <Button
                color="danger"
                className="book-slot"
                onClick={() => toggle()}
                disabled={answer === ""}
              >
                Cancel slot
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
          <div className="appointments" style={{ minHeight: "150px" }}>
            <Card
              className="my-2 card-border"
              style={{ justifyContent: "center" }}
            >
              <CardFooter className="card-header">
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
      {modal && (
        <ConfirmationModal
          modal={modal}
          toggle={toggle}
          handleCancel={handleCancel}
        />
      )}
      <Footer />
    </div>
  );
};

export default ReasonCancel;
