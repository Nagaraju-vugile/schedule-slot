import React, { useEffect, useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import {AiOutlineFieldTime, AiOutlineSchedule} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
} from "reactstrap";

import {
  clearCancelSlots,
  myBookings,
  selectedDataDisplay,
  selectedReschedulerDetails,
  setActiveTab,
} from "../store/scheduler/actions";
import Header from "./Header";
import Login from "./Login";
import NavBar from "./NavBar";

const MyBookings = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  // const [start, setStart] = useState(0);
  // const [end, setEnd] = useState(5);
  const [displayData, setDisplayData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );
  
  const myBookingsData = useSelector(
    (state) => state?.availabilitiesReducer?.myBookings?.pxResults
  );

  const pageSize = 10;
  const pagesCount = Math.ceil(myBookingsData?.length / pageSize);
  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.myBookingsLoader
  );

  const handleReschedule = (id, date, type, guid, pxObjClass, StartTime) => {
    dispatch(selectedDataDisplay(new Date(date)));
    dispatch(
      selectedReschedulerDetails({
        id,
        date,
        type,
        guid,
        pxObjClass,
        StartTime,
      })
    );
    navigate("/scheduler/re-schedule/" + id + "?Type=" + type);
  };

  const handleCancel = (id, date, type, guid, pxObjClass, StartTime) => {
    dispatch(
      selectedReschedulerDetails({
        id,
        date,
        type,
        guid,
        pxObjClass,
        StartTime,
      })
    );
    navigate("/scheduler/cancel/" + id);
  };

  const updateDisplay = () => {
    // const data = myBookingsData?.filter(
    //   (item, index) => index < end && index >= start
    // );
    // console.log(
    //   "********************",
    //   myBookingsData
    //     ?.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    //     .map((data, i) => data)
    // );
    setDisplayData(
      myBookingsData
        ?.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        .map((data, i) => data)
    );
  };

  useEffect(() => {
    dispatch(myBookings("chandan_palamakula"));
    dispatch(setActiveTab("2"));
    dispatch(clearCancelSlots())
  }, [dispatch]);

  useEffect(() => {
    updateDisplay();
  }, [myBookingsData, currentPage]);

  const storedUser = sessionStorage.getItem("userProfile");
  console.log("-------------", userProfile, storedUser)
  useEffect(() => {
    if (storedUser === "null" || storedUser === null ) {
      navigate("/login");
    }
  });

  // const renderPagination = () => {
  //   console.log("----------==============");
  //   [...Array(pagesCount)].map((page, i) => (
  //     <PaginationItem active={i === 2} key={i}>
  //       <PaginationLink onClick={(e) => console.log(e, i)} href="#">
  //         {i + 1}
  //       </PaginationLink>
  //     </PaginationItem>
  //   ));
  // };

  const handlePageClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };
  if (loader) {
    return (
      <div className="loader">
        <Spinner color="dark">Loading...</Spinner>
      </div>
    );
  }

  return (
    <><Header /><Container className="container-scheduler">
      {/* <Login /> */}
      <NavBar />
      <Row>
        <Col className="booking-header">
          <h4>My bookings</h4>
        </Col>
      </Row>
      {myBookingsData && (
        <>
          <Row>
            <Row style={{ paddingBottom: "20px" }} className="table-row-style">
              <Col className="info-sub-header">S.no</Col>
              <Col className="info-sub-header">Type</Col>
              <Col className="info-sub-header">Scheduled date</Col>
              <Col className="info-sub-header">Start time</Col>
              <Col className="info-sub-header">End time</Col>
              <Col className="info-sub-header" style={{ minWidth: "21%" }}>
                Action
              </Col>
            </Row>
            {displayData?.map((item, index) => (
              <Row
                key={index}
                style={{ paddingBottom: "5px" }}
                className="table-row-style"
              >
                <Col className="booking-value">{index + 1}</Col>
                <Col className="booking-value">{item.SchedulerType}</Col>
                <Col className="booking-value">{item.ScheduledDate}</Col>
                <Col className="booking-value">
                  {item.StartTime.split(":")[0]}:{item.StartTime.split(":")[1]}
                </Col>
                <Col className="booking-value">
                  {item.EndTime.split(":")[0]}:{item.EndTime.split(":")[1]}
                </Col>
                <Col className="booking-value" style={{ minWidth: "21%" }}>
                  <Button
                    color="info"
                    onClick={() => handleReschedule(
                      item.SchedulerEmailID,
                      item.ScheduledDate,
                      item.SchedulerType,
                      item.pyGUID,
                      item.pxObjClass,
                      item.StartTime
                    )}
                    style={{ marginRight: "5px" }}
                    className="action-button-table"
                  >
                    Reschedule
                  </Button>
                  {/* <BiPencil
                    className="edit-pencil"
                    onClick={() => handleReschedule(
                      item.SchedulerEmailID,
                      item.ScheduledDate,
                      item.SchedulerType,
                      item.pyGUID,
                      item.pxObjClass,
                      item.StartTime
                    )} /> */}
                     <AiOutlineFieldTime
                    className="edit-pencil"
                    onClick={() => handleReschedule(
                      item.SchedulerEmailID,
                      item.ScheduledDate,
                      item.SchedulerType,
                      item.pyGUID,
                      item.pxObjClass,
                      item.StartTime
                    )} /> 
                    
                  <Button
                    color="danger"
                    onClick={() => handleCancel(
                      item.SchedulerEmailID,
                      item.ScheduledDate,
                      item.SchedulerType,
                      item.pyGUID,
                      item.pxObjClass,
                      item.StartTime
                    )}
                    className="action-button-table"
                  >
                    Cancel
                  </Button>
                  <BiTrash
                    className="cancel-trash"
                    onClick={() => handleCancel(
                      item.SchedulerEmailID,
                      item.ScheduledDate,
                      item.SchedulerType,
                      item.pyGUID,
                      item.pxObjClass,
                      item.StartTime
                    )} />
                </Col>
              </Row>
            ))}
          </Row>
          <Row>
            <Pagination aria-label="page-navigation" className="page-navigation">
              <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink onClick={e => handlePageClick(e, currentPage - 1)} href="#">Prev</PaginationLink>
              </PaginationItem>
              {[...Array(pagesCount)].map((page, i) => (
                <PaginationItem active={i === currentPage} key={i}>
                  <PaginationLink
                    onClick={(e) => handlePageClick(e, i)}
                    href="#"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem disabled={currentPage >= pagesCount - 1}>
                <PaginationLink onClick={e => handlePageClick(e, currentPage + 1)} href="#"> Next</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Row>
        </>
      )}
      {!myBookingsData && <div>No bookins found</div>}
      {/* <Row>
      <Table hover>
        <thead>
          <tr>
            <th className={"w-10"}>S.no</th>
            <th className={"w-40"}>Type</th>
            <th className={"w-10"}>Scheduled date</th>
            <th className={"w-10"}>Start time</th>
            <th className={"w-10"}>End time</th>
            <th className={"w-20"}>Action</th>
          </tr>
        </thead>
        <tbody>
          {myBookingsData?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.SchedulerType}</td>
              <td>{item.ScheduledDate}</td>
              <td>{item.StartTime.split(":")[0]}:{item.StartTime.split(":")[1]}</td>
              <td>{item.EndTime.split(":")[0]}:{item.EndTime.split(":")[1]}</td>
              <td>
                <Button color="info" onClick={()=>handleReschedule(item.SchedulerEmailID, item.ScheduledDate, item.SchedulerType, item.pyGUID, item.pxObjClass, item.StartTime )} style={{marginRight: "5px"}} >Reschedule <BiPencil /></Button>
                <Button color="danger" onClick={()=>handleCancel(item.SchedulerEmailID, item.ScheduledDate, item.SchedulerType, item.pyGUID, item.pxObjClass, item.StartTime )} >Cancel <BiTrash /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row> */}
    </Container></>
  );
};

export default MyBookings;
