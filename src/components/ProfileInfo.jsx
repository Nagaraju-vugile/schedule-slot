import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";


const ProfileInfo = ({SchedulerList }) => {
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  return (
    <div className="padding-top-div">
      <Row>
        <Col xs="2">
          <div className="avatar">
            <BsFillPersonFill className="avatar" />
          </div>
        </Col>
        <Col xs="10">
          <div
            className={query && !query.get("Type") && "padding-top-fullname"}
          >
            {SchedulerList && SchedulerList[0]?.SchedulerDetails?.pyFullName}
          </div>
          <div>{(query && query.get("Type")) || ""}</div>
        </Col>
      </Row>
      <Row>
        {id && (
          <div>
            <b>Id:</b> {id}
          </div>
        )}
      </Row>
      <Row>
        <div className="flex-style">
          <span>
            <b>Address-</b>
          </span>
          <div className="padding-left-style">
            <div>
              <span>
                <b>Type:</b>
              </span>
              {SchedulerList &&
                SchedulerList[0]?.SchedulerDetails?.Address?.Type}
            </div>
            <div>
              <span>
                <b>Virtual medium:</b>
              </span>
              {SchedulerList &&
                SchedulerList[0]?.SchedulerDetails?.Address?.VirtualMedium}
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default ProfileInfo;
