import React, { useEffect, useState } from "react";
import { AiOutlineFieldTime, AiOutlineSortAscending } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
} from "reactstrap";
import config from "../config";
import { messages } from "../constants";

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
  const userProfileEmail = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile?.email
  );
  const [displayData, setDisplayData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [ascend, setAscend] = useState(false);
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
    const currentBookings = myBookingsData
      ?.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
      .map((data, i) => data);

    const sortByDate =
      currentBookings &&
      [...currentBookings].sort((prev, next) =>
        prev["ScheduledDate"] > next["ScheduledDate"] ? 1 : -1
      );

    const sortBySlots =
      sortByDate &&
      [...sortByDate].sort((prev, next) =>
        prev["StartTime"] > next["StartTime"]
          ? 1
          : prev["ScheduledDate"] === next["ScheduledDate"] && -1
      );

    if (search === "") setDisplayData(sortBySlots);
  };

  useEffect(() => {
    dispatch(myBookings(userProfileEmail));
    dispatch(setActiveTab(config.ACTIVE_TAB.MY_BOOKINGS));
    dispatch(clearCancelSlots());
    dispatch(selectedProfileOption(config.PROFILE_NAV_OPTIONS.SETTINGS));
  }, [dispatch, userProfileEmail]);

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

  const sortBy = (type) => {
    setAscend(!ascend);
    if (!ascend) {
      setDisplayData(
        [...displayData].sort((prev, next) =>
          prev[type] > next[type] ? 1 : -1
        )
      );
    } else {
      setDisplayData(
        [...displayData].sort((prev, next) =>
          prev[type] < next[type] ? 1 : -1
        )
      );
    }
  };

  return (
    <div className="layout-main">
      <Header />
      <Container className="container-scheduler">
        <NavBar />
        <Row>
          <Col className="booking-header">
            <h5>{messages.labels.showAvailableBookings}</h5>
          </Col>
        </Row>
        {(loader && (
          <div className="loader">
            <Spinner animation="border" variant="warning">
              {messages.labels.loading}
            </Spinner>
          </div>
        )) || (
          <>
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
                    <Col className="info-sub-header">
                      <span>S.no</span>
                    </Col>
                    <Col
                      className="info-sub-header"
                      onClick={() => sortBy("SchedulerType")}
                      title="Sort"
                    >
                      <span className="sort-style">
                        {messages.labels.type} <AiOutlineSortAscending />
                      </span>
                    </Col>
                    <Col
                      className="info-sub-header"
                      onClick={() => sortBy("ScheduledDate")}
                      title="Sort"
                    >
                      <span className="sort-style">
                        {messages.labels.scheduledDate}{" "}
                        <AiOutlineSortAscending />
                      </span>
                    </Col>
                    <Col
                      className="info-sub-header"
                      onClick={() => sortBy("StartTime")}
                      title="Sort"
                    >
                      <span className="sort-style">
                        {messages.labels.startTime} <AiOutlineSortAscending />
                      </span>
                    </Col>
                    <Col
                      className="info-sub-header"
                      onClick={() => sortBy("EndTime")}
                      title="Sort"
                    >
                      <span className="sort-style">
                        {messages.labels.endTime} <AiOutlineSortAscending />
                      </span>
                    </Col>
                    <Col className="info-sub-header action-column-min-width">
                      <span> {messages.labels.action} </span>
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
                        {item.EndTime.split(":")[0]}:
                        {item.EndTime.split(":")[1]}
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
                          {messages.buttons.reschedule}
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
                          {messages.buttons.cancel}
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
                        {messages.buttons.prev}
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
                        {messages.buttons.next}
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </Row>
              </>
            )}
            {(!myBookingsData || myBookingsData?.length < 1) && (
              <div className="no-availabilities-div">
                {messages.errorMessages.noBookings}
              </div>
            )}
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default MyBookings;
