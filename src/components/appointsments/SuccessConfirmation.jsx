import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Col, Row } from "reactstrap";

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
      // navigate("/scheduler/re-schedule/" + idCheck + queryCheck);
    }
  };

  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
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
    <div className="appointments">
      <Card
        className="my-2 card-border"
      >
        <CardBody className="padding-top-style">
          <div className="appointments">
            <Row>
              <Col>
                <div className="padding-top-content">
                  <span className="info-sub-header">Email: </span>

                  {userProfile.email}
                </div>
                <div className="padding-top-content">
                  <span className="info-sub-header"> Full name: </span>
                  {userProfile.name}
                </div>
                <div className="padding-top-content">
                  <span className="info-sub-header"> Booked date: </span>
                  {dateSelected}
                </div>
                <div className="padding-top-content">
                  <span className="info-sub-header"> Booked slot: </span>
                  {slotSelected}
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
        <CardFooter className="card-footer"
          
        >
          <div>
            <span className="another-slot-hint">
              Go back to book for another slot
            </span>
            <Button color="primary" onClick={() => handleBack()}>
              Back
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SuccessConfirmation;
