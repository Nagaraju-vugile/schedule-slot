import React, { useState } from "react";
// import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-calendar/dist/Calendar.css';
// import moment from "moment";
import { FcCalendar } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Container } from 'reactstrap';
import { getAvailabilities, selectedDataDisplayT, selectedDate } from "../../store/posts/actions";
import AppointmentsWithDate from "./AppointmentsWithDate";
import "./index.css";

const Appointments = ({ appointments }) => {
  let dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const [viewCalender, setViewCalender] = useState(false);
  const prevDateSelected = useSelector(state => state?.availabilitiesReducer?.prevDateSelected);

  const dates = appointments && appointments?.map(item=>item.ScheduledDate);
  const [size, setSize] = useState(5);
  const nextDays = (date, days)=>{
    return new Date(new Date(date).getTime()+days * 24*60*60*1000);
  };

  let maxValue = appointments?.reduce((acc, value) => {
    return (acc = acc > value.Slots.length ? acc : value.Slots.length);
  }, 0);

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
    setSize(5);
  }
  const handleNext = ()=>{
    dispatch(selectedDataDisplayT(nextBtnStartTime));
    setViewCalender(false);
    dispatch(getAvailabilities(nextBtnStartTime, nextBtnEndTime));
    setSize(5);
  }

  const setDate = (e)=>{
    // console.log("e***", moment(new Date(e)).utc().format('YYYYMMDD'))
    onChange(e);
    setViewCalender(!viewCalender);
    dispatch(selectedDate(new Date(e)));
    const start = nextDays(new Date(e), 0);
    // const start = new Date(e);
    const end = nextDays(new Date(e), 5);
    dispatch(selectedDataDisplayT(e));
    dispatch(getAvailabilities(start, end));
    setSize(5);
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
            {/* {viewCalender&&<Calendar onChange={setDate} value={value} />} */}
            {viewCalender&&<DatePicker  onChange={setDate} selected={value} />}
            </div>
          </div>
          {!appointments && <div className="no-availabilities-div">No schedules found</div>}
          {appointments && <div className="show-more-div">
            <button className="show-more" onClick={() => setSize(maxValue)}>MORE</button>
            <button className="show-more" onClick={() => setSize(5)}>LESS</button>
          </div>}
          {/* <div className="actions-div">
            <button className="book-slot">Book</button>
          </div> */}
    </ Container>
  );
};

export default Appointments;
