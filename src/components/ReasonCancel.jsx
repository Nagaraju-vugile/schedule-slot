import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
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
import NavBar from "./NavBar";

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
        <Spinner animation="border" variant="warning">Loading...</Spinner>
      </div>
    );
  }

  if (!reschedulerDataSelected) {
    handleBack();
  }
  
  return (
    <div className="layout-main">
      <Header />
      <NavBar />
      {!pyStatusMessage && (
        <Row
          className="appointments"
          style={{ minHeight: "150px", margin: "10px" }}
        >
          <Card
            className="my-2 card-border"
            style={{ justifyContent: "center" }}
          >
            <Row>
              <Col xs="4">
                <Button onClick={() => handleBack()} className="back-button" color="link">
                    <IoIosArrowBack className="next-button-svg" />
                  Back
                </Button>
              </Col>
              <Col xs="8" style={{ paddingTop: "12px" }}>
                <div>
                  <h5>Please confirm the details</h5>
                </div>
              </Col>
            </Row>
            <CardHeader className="card-header">
              {reschedulerDataSelected && (
                <Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      Selected date:
                    </Col>
                    <Col> {reschedulerDataSelected?.date}</Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      Selected time:
                    </Col>
                    <Col>
                      {reschedulerDataSelected?.StartTime?.split(":")[0]}:
                      {reschedulerDataSelected?.StartTime?.split(":")[1]}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="display-end">
                      Selected type:
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
              <div
                style={{
                  borderBottom: "1px solid rgb(237 205 237)",
                  marginTop: "4px",
                  marginBottom: "4px",
                }}
              />
              <CardText className="appointments">
                <div className="padding-top-content">
                  <Input
                    rows="4"
                    cols="50"
                    value={answer}
                    onChange={(e) => updateAnswer(e)}
                    type="textarea"
                    name="text"
                    id="reason"
                    placeholder="Add any additional message or reason for cancellation.."
                  />
                </div>
              </CardText>
            </CardBody>
            <CardFooter className="card-header">
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
              <Row>
                <div className="appointments">
                  <h4>Confirmed! </h4>
                </div>
              </Row>
              <Row className="appointments">{pyStatusMessage}</Row>
            </Alert>
          </div>
          <div
            className="appointments"
            style={{ minHeight: "150px", margin: "10px" }}
          >
            <Card
              className="my-2 card-border"
              style={{ justifyContent: "center" }}
            >
              <Row style={{ margin: "10px" }}>
                <Col xs="2">
                  <Button onClick={() => handleBack()} className="back-button" color="link">
                  <IoIosArrowBack className="next-button-svg" />
                    Back
                  </Button>
                </Col>
                <Col xs="10" style={{ paddingTop: "12px" }}>
                  <i>
                    A cancellation email has been sent to you and your invitee.
                  </i>
                </Col>
              </Row>
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
