import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcCalendar } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from "reactstrap";
import { getMaxLength, nextDays, prevDays } from "../../helpers/ui_helper";
import { getAvailabilities, selectedDataDisplay } from "../../store/scheduler/actions";
import ProfileInfo from "../ProfileInfo";
import AppointmentsWithDate from "./AppointmentsWithDate";
import "./index.css";

const Appointments = ({ appointments }) => {
  let dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();
  let query = new URLSearchParams(useLocation().search);
  const [viewCalender, setViewCalender] = useState(false);
  const selectedStartDate = useSelector(state => state?.availabilitiesReducer?.selectedStartDate);
  const dates = appointments && appointments?.map(item=>item.ScheduledDate);
  const selectedTypeDetails = useSelector(state => state?.availabilitiesReducer?.selectedTypeDetails);
  const SchedulerList = useSelector(state => state?.availabilitiesReducer?.availabilities?.SchedulerList);

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

  const handleBack = ()=>{
    navigate("/doctors-list")
  }

  return (
    <div className="content">
      <Container>
        <Row>
          <Col xs="9" className="border-main-div">
            <Row>
              <div className="padding-bottom-row">
                <h5>scheduler</h5>
              </div>
            </Row>
            <Row>
              <Col xs="1">
                <Button className="button-next" onClick={() => handlePrev()}>
                  <IoIosArrowBack className="next-button-svg" />
                </Button>
              </Col>
              <Col xs="9">
                <Row>
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
                </Row>
              </Col>
              <Col xs="1">
                <Button className="button-next" onClick={handleNext}>
                  <IoIosArrowForward className="next-button-svg" />
                </Button>
              </Col>
              <Col xs="1">
                <button
                  className="view-calender"
                  onClick={() => setViewCalender(!viewCalender)}
                >
                  <FcCalendar className="view-calender-svg" />
                </button>
                {viewCalender && (
                  <DatePicker
                    onChange={setDate}
                    selected={value}
                    showMonthDropdown
                    useShortMonthInDropdown
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={15}
                    scrollableYearDropdown
                  />
                )}
              </Col>
            </Row>
            <Row>
              {!appointments && (
                <div className="no-availabilities-div">No schedules found</div>
              )}
            </Row>
            {appointments && (
              <>
                <Row>
                  {size === 5 && (
                    <Button
                      className="show-more"
                      color="link"
                      onClick={() => setSize(maxValue)}
                    >
                      MORE
                    </Button>
                  )}
                  {size !== 5 && (
                    <Button
                      className="show-more"
                      color="link"
                      onClick={() => setSize(5)}
                    >
                      LESS
                    </Button>
                  )}
                </Row>
              </>
            )}
            {/* </div> */}
          </Col>
          <Col xs="3">
            <ProfileInfo SchedulerList={SchedulerList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointments;
