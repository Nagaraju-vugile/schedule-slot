import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Col } from "reactstrap";
import { days, months } from "../../constants";
import { selectedSlotDetails } from "../../store/scheduler/actions";
// import "./index.css";

const AppointmentsWithDate = ({
  date,
  timings,
  appontment,
  size,
  navigateLink,
  schedulerListData,
}) => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const updatedDate = new Date(date);
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  const handleSelectedSlot = (timing) => {
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
    const updatePySelected = [{ ...timing, pySelected: "true" }];
    const formedTiming = { ...appontment, updatePySelected };
    dispatch(
      selectedSlotDetails({ timing: formedTiming, date, schedulerListData })
    );
    navigate(navigateLink + idCheck + queryCheck);
  };

  return (
    <Col xs="1" className="min-width-day-column">
      <div className="availabilities-day">
        <div className="availabilities-day-title">
          <div className="availabilities-day-name">
            <b>{days[updatedDate.getDay()]}</b>
          </div>
          <div className="availabilities-day-date">
            {months[updatedDate.getMonth()]}. {updatedDate.getDate()}
          </div>
        </div>
        {timings?.length > 0 &&
          timings?.map((timing, index) => {
            return (
              (index < size && timing?.pyText && (
                <div className="availabilities-slot" key={index}>
                  <button
                    className="timing"
                    onClick={() => handleSelectedSlot(timing)}
                    title={"Book at " + timing?.pyText || timing?.StartTimeText}
                  >
                    {timing?.pyText || timing?.StartTimeText}
                  </button>
                </div>
              )) ||
              (index < size && timing?.pyStatusMessage === "Unavailable" && (
                <Button className="timing-disabled">
                  {timing.pyStatusMessage}
                </Button>
              ))
            );
          })}
      </div>
    </Col>
  );
};

export default AppointmentsWithDate;
