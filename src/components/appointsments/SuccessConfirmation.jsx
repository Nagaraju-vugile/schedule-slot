

import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const SuccessConfirmation = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
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
    navigate("/scheduler/" + idCheck + queryCheck);
  };
  const pyEmail = useSelector(
    (state) =>
      state?.availabilitiesReducer?.availabilities?.SchedulerList[0]
        ?.SchedulerDetails?.pyEmail
  );
  const pyFullName = useSelector(
    (state) =>
      state?.availabilitiesReducer?.availabilities?.SchedulerList[0]
        ?.SchedulerDetails?.pyFullName
  );
  const dateSelected = useSelector(
    (state) => state?.availabilitiesReducer?.selectedSlotDetails?.date
  );
  const slotSelected = useSelector(
    (state) =>
      state?.availabilitiesReducer?.selectedSlotDetails?.timing?.test[0]
        .StartTimeText
  );
  return (
    <>
      <div className="content-div-confirmation">
        <Row>
          <Col className="confirmation-section-col">
            <div>
              <span className="info-sub-header">Email: </span>

              {pyEmail}
            </div>
            <div>
              <span className="info-sub-header"> Full name: </span>
              {pyFullName}
            </div>
            <div>
              <span className="info-sub-header"> Selected date: </span>
              {dateSelected}
            </div>
            <div>
              <span className="info-sub-header"> Selected slot: </span>
              {slotSelected}
            </div>
          </Col>
        </Row>
      </div>
      <div className="main-questions-div">
        <span className="another-slot-hint">
          Do you want to book for another slot?
        </span>
        <Button color="primary" onClick={() => handleBack()}>
          Back
        </Button>
      </div>
    </>
  );
};

export default SuccessConfirmation;
