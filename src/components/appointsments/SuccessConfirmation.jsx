import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { IoIosArrowBack } from "react-icons/io";

const SuccessConfirmation = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  let checkPath = useLocation().pathname.indexOf("re-schedule");

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
  const handleBack = () => {
    if (checkPath < 0) navigate("/scheduler/" + idCheck + queryCheck);
    else {
         navigate("/my-bookings");
    }
  };

  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );

  const bookedSlotType = useSelector(
    (state) => state?.availabilitiesReducer?.bookedSlot?.SchedulerList[0]?.SchedulerDetails?.Schedules[0]?.Type
  );

  const dateSelected = useSelector(
    (state) => state?.availabilitiesReducer?.selectedSlotDetails?.date
  );
  const slotSelected = useSelector(
    (state) =>
      state?.availabilitiesReducer?.selectedSlotDetails?.timing
        ?.updatePySelected[0].StartTimeText
  );
  return (
    <Row className="question-section-card">
      <Card className="my-2 card-border">
      <Row>
          <Col xs="4">
            <Button onClick={() => handleBack()} className="back-button" color="link">
            <IoIosArrowBack className="next-button-svg" />
              Back
            </Button>
          </Col>
          <Col xs="8" style={{paddingTop: "12px"}}>
            <div><h5>Scheduled information</h5></div></Col>
        </Row>
        <CardBody className="padding-top-style">
          <div className="appointments">
            <Row>
              <Col>
                <div className="padding-top-content">
                  <span className="info-sub-header">Email: </span>

                  <span className="success-confrm-value">
                    {userProfile.email}
                  </span>
                </div>
                <div className="padding-top-content">
                  <span className="info-sub-header"> Full name: </span>
                  <span className="success-confrm-value">
                    {userProfile.name}
                  </span>
                </div>
                <div className="padding-top-content">
                  <span className="info-sub-header"> Scheduled date: </span>
                  <span className="success-confrm-value">{dateSelected}</span>
                </div>
                <div className="padding-top-content">
                  <span className="info-sub-header"> Scheduled slot: </span>
                  <span className="success-confrm-value">{slotSelected}</span>
                </div>
                <div className="padding-top-content">
                  <span className="info-sub-header"> Scheduled type: </span>
                  <span className="success-confrm-value">{bookedSlotType}</span>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <span className="success-confrm-value padding-top-content appointments">
              <i>A calender invite with scheduled details has been forwarded to
              your email address.</i>
            </span>
          </Row>
        </CardBody>
      </Card>
    </Row>
  );
};

export default SuccessConfirmation;
