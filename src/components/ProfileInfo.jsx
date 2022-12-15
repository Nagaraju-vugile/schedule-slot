import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Col, Row } from "reactstrap";
import { messages } from "../constants";
import ReactRoundedImage from "react-rounded-image";


const ProfileInfo = ({ SchedulerList, indexAppointment }) => {
  const pyEmail = SchedulerList && SchedulerList[indexAppointment]?.SchedulerDetails?.pyEmail;
  const pyImageUrl = SchedulerList && SchedulerList[indexAppointment]?.SchedulerDetails?.pyFilePath;
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
      <Row className="image-name-style">
        <Col xs="2">
          <div className="avatar">
            {(pyImageUrl && (
              <ReactRoundedImage
                image={pyImageUrl}
                roundedColor="#950695"
                imageWidth="70"
                imageHeight="70"
                roundedSize="2"
                borderRadius="20"
              />
            )) || <BsFillPersonFill className="avatar" />}
          </div>
        </Col>
        <Col xs="10" className="padding-left-fullname">
          <div className={!pyType && "padding-top-fullname"}>
            {SchedulerList &&
              SchedulerList[indexAppointment]?.SchedulerDetails?.pyFullName}
          </div>
          <div>{pyType}</div>
        </Col>
      </Row>
      <Row>
        {pyEmail && (
          <div className="flex-style">
            <span className="padding-left-style">
              <span className="info-sub-header-label">
                {messages.labels.id}:{" "}
              </span>
              {pyEmail}
            </span>
          </div>
        )}
      </Row>
      <Row>
        <div className="flex-style" style={{ marginTop: "5px" }}>
          <span
            className="padding-left-style"
            style={{ fontSize: "18px", fontWeight: "600" }}
          >
            {messages.labels.address}:
          </span>
          <div className="padding-left-style-address">
            <div>
              <span className="info-sub-header-label">
                {messages.labels.type}:{" "}
              </span>
              {addressType}
            </div>
            <div>
              <span className="info-sub-header-label">
                {messages.labels.medium}:{" "}
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
