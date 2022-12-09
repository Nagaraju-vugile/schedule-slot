import React, { useEffect, useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
  Input,
} from "reactstrap";
import config from "../config";

import {
  clearCancelSlots,
  myBookings,
  selectedDataDisplay,
  selectedProfileOption,
  selectedReschedulerDetails,
  setActiveTab,
} from "../store/scheduler/actions";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

const MyBookings = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let path = useLocation().pathname;
  const myBookingsData = useSelector(
    (state) => state?.availabilitiesReducer?.myBookings?.pxResults
  );
  const [displayData, setDisplayData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = config.PAGES_COUNT;
  const [pagesCount, setPagesCount] = useState(
    Math.ceil(myBookingsData?.length / pageSize) || 0
  );
  const [search, setSearch] = useState("");

  sessionStorage.setItem("prevLocation", path);
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
    navigate("/scheduler/re-schedule/" + id + (type && "?Type=" + type));
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
    if (search === "")
      setDisplayData(
        myBookingsData
          ?.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
          .map((data, i) => data)
      );
  };

  useEffect(() => {
    dispatch(myBookings("krishna_chaitanya@bluerose-tech.com"));
    dispatch(setActiveTab(config.ACTIVE_TAB.MY_BOOKINGS));
    dispatch(clearCancelSlots());
    dispatch(selectedProfileOption(config.PROFILE_NAV_OPTIONS.SETTINGS));
  }, [dispatch]);

  useEffect(() => {
    updateDisplay();
    setPagesCount(Math.ceil(myBookingsData?.length / pageSize) || 0);
  }, [myBookingsData, currentPage]);

  useEffect(() => {
    const filteredSearch = myBookingsData?.filter((item) =>
      item?.SchedulerType?.toLowerCase()?.includes(search?.toLowerCase())
    );
    setDisplayData(
      filteredSearch
        ?.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        .map((data, i) => data)
    );
    filteredSearch &&
      setPagesCount(Math.ceil(filteredSearch?.length / pageSize));
  }, [search, currentPage]);

  useEffect(() => {
    if (displayData?.length < 1) setCurrentPage(0);
  }, [displayData]);

  const storedUser = sessionStorage.getItem("userProfile");
  useEffect(() => {
    if (storedUser === "null" || storedUser === null) {
      navigate("/login");
    }
  });

  const handlePageClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  if (loader) {
    return (
      <div className="loader">
        <Spinner animation="border" variant="warning">Loading...</Spinner>
      </div>
    );
  }

  return (
    <div className="layout-main">
      <Header />
      <Container className="container-scheduler">
        <NavBar />
        <Row>
          <Col className="booking-header">
            <h5>Available bookings</h5>
          </Col>
        </Row>

        {myBookingsData?.length > 0 && (
          <>
            <Row className="search-by-type-input">
              <Col xs="4">
                <Input
                  type="text"
                  name="search"
                  id="search"
                  value={search}
                  placeholder="Search by type"
                  onChange={(e) => handleSearch(e)}
                />
              </Col>
            </Row>
            <Row>
              <Row className="table-row-style">
                <Col className="info-sub-header">S.no</Col>
                <Col className="info-sub-header">Type</Col>
                <Col className="info-sub-header">Scheduled date</Col>
                <Col className="info-sub-header">Start time</Col>
                <Col className="info-sub-header">End time</Col>
                <Col className="info-sub-header action-column-min-width">
                  Action
                </Col>
              </Row>
              {displayData?.map((item, index) => (
                <Row
                  key={index}
                  className="table-row-style"
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "rgb(243 240 240 / 80%)" : "white",
                  }}
                >
                  <Col className="booking-value">{index + 1}</Col>
                  <Col className="booking-value">{item.SchedulerType}</Col>
                  <Col className="booking-value">{item.ScheduledDate}</Col>
                  <Col className="booking-value">
                    {item.StartTime.split(":")[0]}:
                    {item.StartTime.split(":")[1]}
                  </Col>
                  <Col className="booking-value">
                    {item.EndTime.split(":")[0]}:{item.EndTime.split(":")[1]}
                  </Col>
                  <Col className="booking-value action-column-min-width">
                    <Button
                      color="info"
                      onClick={() =>
                        handleReschedule(
                          item.SchedulerEmailID,
                          item.ScheduledDate,
                          item.SchedulerType,
                          item.pyGUID,
                          item.pxObjClass,
                          item.StartTime
                        )
                      }
                      className="action-button-table-reschedule"
                    >
                      Reschedule
                    </Button>

                    <AiOutlineFieldTime
                      className="edit-pencil"
                      onClick={() =>
                        handleReschedule(
                          item.SchedulerEmailID,
                          item.ScheduledDate,
                          item.SchedulerType,
                          item.pyGUID,
                          item.pxObjClass,
                          item.StartTime
                        )
                      }
                    />

                    <Button
                      color="danger"
                      onClick={() =>
                        handleCancel(
                          item.SchedulerEmailID,
                          item.ScheduledDate,
                          item.SchedulerType,
                          item.pyGUID,
                          item.pxObjClass,
                          item.StartTime
                        )
                      }
                      className="action-button-table-cancel"
                    >
                      Cancel
                    </Button>
                    <BiTrash
                      className="cancel-trash"
                      onClick={() =>
                        handleCancel(
                          item.SchedulerEmailID,
                          item.ScheduledDate,
                          item.SchedulerType,
                          item.pyGUID,
                          item.pxObjClass,
                          item.StartTime
                        )
                      }
                    />
                  </Col>
                </Row>
              ))}
            </Row>
            <Row>
              <Pagination
                aria-label="page-navigation"
                className="page-navigation"
              >
                <PaginationItem disabled={currentPage <= 0}>
                  <PaginationLink
                    onClick={(e) => handlePageClick(e, currentPage - 1)}
                    href="#"
                  >
                    Prev
                  </PaginationLink>
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
                  <PaginationLink
                    onClick={(e) => handlePageClick(e, currentPage + 1)}
                    href="#"
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Row>
          </>
        )}
        {(!myBookingsData || myBookingsData?.length < 1) && (
          <div className="no-availabilities-div">No bookings found</div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default MyBookings;
