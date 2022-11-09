import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FcCalendar } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Container } from 'reactstrap';
import { getAvailabilities, selectedDataDisplayT, selectedDate } from "../../store/posts/actions";
import AppointmentsWithDate from "./AppointmentsWithDate";
import "./index.css";

const Appointments = ({ appointments }) => {
  console.log("appointments****", appointments)
  let dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const [viewCalender, setViewCalender] = useState(false);
  const prevDateSelected = useSelector(state => state?.availabilitiesReducer?.prevDateSelected);
  const pyStatusMessage = useSelector(state => state?.availabilitiesReducer?.availabilities?.pyStatusMessage);

  const dates = appointments && appointments?.map(item=>item.ScheduledDate);
  const [size, setSize] = useState(5);
  const nextDays = (date, days)=>{
    return new Date(new Date(date).getTime()+days * 24*60*60*1000);
  };

  const prevDays = (date, days)=>{
    return new Date(new Date(date).getTime()-days * 24*60*60*1000);
  };  
  const nextBtnStartTime = nextDays(new Date(prevDateSelected), 6);
  const nextBtnEndTime = nextDays(new Date(prevDateSelected), 11);
  const prevBtnStartTime = prevDays(new Date(prevDateSelected), 6);
  const prevBtnEndTime = prevDays(new Date(prevDateSelected), 1);

  const handlePrev = ()=>{
    dispatch(selectedDataDisplayT(prevBtnStartTime));
    setViewCalender(false);
    dispatch(getAvailabilities(prevBtnStartTime, prevBtnEndTime));

  }
  const handleNext = ()=>{
    dispatch(selectedDataDisplayT(nextBtnStartTime));
    setViewCalender(false);
    dispatch(getAvailabilities(nextBtnStartTime, nextBtnEndTime));
  }

  const setDate = (e)=>{
    onChange(e);
    setViewCalender(!viewCalender);
    dispatch(selectedDate(new Date(e)));
    const start = nextDays(new Date(e), 1);
    // const start = new Date(e);
    const end = nextDays(new Date(e), 6);
    dispatch(selectedDataDisplayT(e));
    dispatch(getAvailabilities(start, end));
  }
  
  return (
    <Container>
          <div className="appointments">
            <div>
              <button className="button-prev" onClick={handlePrev}><IoIosArrowBack className="prev-button-svg"/></button>
            </div>
            {!appointments && <div className="empty-div"></div>}
            {dates?.map((date, index) => {
              return (
                appointments&&<AppointmentsWithDate
                  date={date}
                  timings={appointments[index].Slots} size={size}/>
                  
              );
            })}
            <div style={{ marginLeft: '20px' }}>
              <button className="button-next" onClick={handleNext}><IoIosArrowForward className="next-button-svg"/></button>
            </div>
            <div>
            <div><button className="view-calender" onClick={()=>setViewCalender(!viewCalender)}><FcCalendar className="view-calender-svg"/></button></div>
            {viewCalender&&<Calendar onChange={setDate} value={value} />}
            </div>
          </div>
          {!appointments && <div className="no-availabilities-div">No schedules found</div>}
          <div className="show-more-div">
            <button className="show-more" onClick={() => setSize(10)}>MORE</button>
            <button className="show-more" onClick={() => setSize(5)}>LESS</button>
          </div>
          {/* <div className="actions-div">
            <button className="book-slot">Book</button>
          </div> */}
    </ Container>
  );
};

export default Appointments;
