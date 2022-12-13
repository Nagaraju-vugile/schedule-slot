import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Col, Row } from "reactstrap";
import { messages } from "../constants";


const ProfileInfo = ({ SchedulerList, indexAppointment }) => {
  const pyEmail = SchedulerList && SchedulerList[indexAppointment]?.SchedulerDetails?.pyEmail;
  const pyImage = SchedulerList && SchedulerList[indexAppointment]?.SchedulerDetails?.pyFilePath;

  const pyType =
    (SchedulerList && SchedulerList[indexAppointment]?.SchedulerDetails?.Schedules[indexAppointment]?.Type) ||
    "";
  const addressType =
    (SchedulerList && SchedulerList[indexAppointment]?.SchedulerDetails?.Address?.Type) || "";
  const virtualMedium =
    (SchedulerList &&
      SchedulerList[indexAppointment]?.SchedulerDetails?.Address?.VirtualMedium) ||
    "";

  return (
    <div className="flex-style">
      <Row>
        <Col xs="2">
          <div className="avatar">
            {pyImage && <img src={pyImage} alt="profile" className="avatar" height="70px" width="70px" /> || <BsFillPersonFill className="avatar" /> }
            
          </div>
        </Col>
        <Col xs="10" className="padding-left-fullname">
          <div className={!pyType && "padding-top-fullname"}>
            {SchedulerList && SchedulerList[indexAppointment]?.SchedulerDetails?.pyFullName}
          </div>
          <div>{pyType}</div>
        </Col>
      </Row>
      <Row>
        {pyEmail && (
          <div className="flex-style">
            <span className="padding-left-style">
              <b>{messages.labels.id}:</b> {pyEmail}
            </span>
          </div>
        )}
      </Row>
      <Row>
        <div className="flex-style">
          <span className="padding-left-style">
            <b>{messages.labels.address}- </b>
          </span>
          <div className="padding-left-style">
            <div>
              <span>
                <b>{messages.labels.type}: </b>
              </span>
              {addressType}
            </div>
            <div>
              <span>
                <b>{messages.labels.medium}: </b>
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
