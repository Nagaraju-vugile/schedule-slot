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
    <>
      <Header />

      {!pyStatusMessage && (
        <Row className="appointments">
          <Card
            className="my-2"
            style={{
              width: "700px",
              boxShadow: "rgb(0 0 0 / 16%) 1px 1px 10px",
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
          <div className="appointments">
            <Card
              className="my-2"
              style={{
                width: "700px",
                boxShadow: "rgb(0 0 0 / 16%) 1px 1px 10px",
              }}
            >
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
      {modal && (
        <ConfirmationModal
          modal={modal}
          toggle={toggle}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default ReasonCancel;
