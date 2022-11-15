import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcCalendar } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import { getAvailabilities, selectedDataDisplay } from "../../store/scheduler/actions";
import AppointmentsWithDate from "./AppointmentsWithDate";
import "./index.css";
import { getMaxLength, nextDays, prevDays } from "../../helpers/ui_helper";

const Appointments = ({ appointments }) => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let query = new URLSearchParams(useLocation().search);
  const [viewCalender, setViewCalender] = useState(false);
  const selectedStartDate = useSelector(state => state?.availabilitiesReducer?.selectedStartDate);
  const dates = appointments && appointments?.map(item=>item.ScheduledDate);

  const [value, onChange] = useState(selectedStartDate);
  const [size, setSize] = useState(5);
  let maxValue = getMaxLength(appointments);

  const nextBtnStartTime = nextDays(new Date(selectedStartDate), 6);
  const prevBtnStartTime = prevDays(new Date(selectedStartDate), 6);

  const handlePrev = ()=>{
    dispatch(selectedDataDisplay(prevBtnStartTime));
    setViewCalender(false);
    dispatch(getAvailabilities(prevBtnStartTime, id, query.get("Type")));
    setSize(5);
  }
  const handleNext = ()=>{
    dispatch(selectedDataDisplay(nextBtnStartTime));
    setViewCalender(false);
    dispatch(getAvailabilities(nextBtnStartTime, id, query.get("Type")));
    setSize(5);
  }

  const setDate = (e)=>{
    onChange(e);
    setViewCalender(!viewCalender);
    const start = nextDays(new Date(e), 0);
    dispatch(selectedDataDisplay(e));
    dispatch(getAvailabilities(start, id, query.get("Type")));
    setSize(5);
  }
  
  return (
    <Container>
      <div className="appointments">
        <b>Make a schedule</b>
      </div>
      <div className="appointments">
        <div>
          <button className="button-prev" onClick={handlePrev}>
            <IoIosArrowBack className="prev-button-svg" />
          </button>
        </div>
        {!appointments && <div className="empty-div"></div>}
        {dates?.map((date, index) => {
          return (
            appointments && (
              <AppointmentsWithDate
                date={date}
                timings={appointments[index].Slots}
                size={size}
                appontment={appointments[index]}
                key={index}
              />
            )
          );
        })}
        <div style={{ marginLeft: "20px" }}>
          <button className="button-next" onClick={handleNext}>
            <IoIosArrowForward className="next-button-svg" />
          </button>
        </div>
        <div>
          <div>
            <button
              className="view-calender"
              onClick={() => setViewCalender(!viewCalender)}
            >
              <FcCalendar className="view-calender-svg" />
            </button>
          </div>
          {viewCalender && <DatePicker onChange={setDate} selected={value} />}
        </div>
      </div>
      {!appointments && (
        <div className="no-availabilities-div">No schedules found</div>
      )}
      {appointments && (
        <div className="show-more-div">
          {size === 5 && (
            <button className="show-more" onClick={() => setSize(maxValue)}>
              MORE
            </button>
          )}
          {size !== 5 && (
            <button className="show-more" onClick={() => setSize(5)}>
              LESS
            </button>
          )}
        </div>
      )}
    </Container>
  );
};

export default Appointments;
