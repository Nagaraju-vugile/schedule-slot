import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Col, Row } from "reactstrap";


const ProfileInfo = ({ SchedulerList }) => {
  const pyEmail = SchedulerList && SchedulerList[0]?.SchedulerDetails?.pyEmail;
  const pyType =
    (SchedulerList && SchedulerList[0]?.SchedulerDetails?.Schedules[0]?.Type) ||
    "";
  const addressType =
    (SchedulerList && SchedulerList[0]?.SchedulerDetails?.Address?.Type) || "";
  const virtualMedium =
    (SchedulerList &&
      SchedulerList[0]?.SchedulerDetails?.Address?.VirtualMedium) ||
    "";

  return (
    <div>
      <Row>
        <Col xs="2">
          <div className="avatar">
            <BsFillPersonFill className="avatar" />
          </div>
        </Col>
        <Col xs="10" className="padding-left-fullname">
          <div className={!pyType && "padding-top-fullname"}>
            {SchedulerList && SchedulerList[0]?.SchedulerDetails?.pyFullName}
          </div>
          <div>{pyType}</div>
        </Col>
      </Row>
      <Row>
        {pyEmail && (
          <div className="flex-style">
            <span className="padding-left-style">
              <b>Id:</b> {pyEmail}
            </span>
          </div>
        )}
      </Row>
      <Row>
        <div className="flex-style">
          <span className="padding-left-style">
            <b>Address- </b>
          </span>
          <div className="padding-left-style">
            <div>
              <span>
                <b>Type: </b>
              </span>
              {addressType}
            </div>
            <div>
              <span>
                <b>Virtual medium: </b>
              </span>
              {virtualMedium}
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default ProfileInfo;
