import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedulerTypeDetails } from "../store/scheduler/actions";

const DoctorsList = ()=>{
  let dispatch = useDispatch();

  const schedulerTypes = useSelector(
    (state) => state?.availabilitiesReducer?.schedulerTypes?.pxResults
  );
  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.loadingSchedulerTypes
  );

  useEffect(() => {
    dispatch(getSchedulerTypeDetails());
  }, [dispatch]);

  const renderByIdTypes = (schedulerTypes) => {
    return schedulerTypes?.map((item) => (
      <li key={item.SchedulerRefID}>
        <a href={"/scheduler/" + item.SchedulerRefID + "?Type=" + item.Type}>
          {item.Type} - {item.SchedulerRefID}
        </a>
      </li>
    ));
  };

  const renderById = (schedulerTypes) => {
    return schedulerTypes?.map((item) => (
      <li key={item.SchedulerRefID}>
        <a href={"/scheduler/" + item.SchedulerRefID}>{item.SchedulerRefID}</a>
      </li>
    ));
  };

  const renderByTypes = (schedulerTypes) => {
    return schedulerTypes?.map((item) => (
      <li key={item.SchedulerRefID}>
        <a href={"/scheduler/?Type=" + item.Type}>{item.Type}</a>
      </li>
    ));
  };

  if (loader) {
    return <div className="loader">Loading..</div>;
  }

  return (
    <>
      <div className="search-by-div">
        <div className="header-search-by">search by Id and Type</div>
        {renderByIdTypes(schedulerTypes)}
        <div className="header-search-by">search by Id</div>
        {renderById(schedulerTypes)}
        <div className="header-search-by">search by Type</div>
        {renderByTypes(schedulerTypes)}
      </div>
    </>
  );
}

export default DoctorsList;