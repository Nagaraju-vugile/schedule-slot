import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  ButtonDropdown,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Spinner,
} from "reactstrap";
import { getUnique } from "../helpers/ui_helper";
import {
  clearAvailabilities,
  getSchedulerTypeDetails,
  setActiveTab,
  updateSelectedTypeDetails,
} from "../store/scheduler/actions";
import Header from "./Header";
import NavBar from "./NavBar";

const SchedulerTypesList = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const storedUser = sessionStorage.getItem("userProfile");
  let path = useLocation().pathname;
  sessionStorage.setItem('prevLocation', path);
  const [openId, setOpenId] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const schedulerTypes = useSelector(
    (state) => state?.availabilitiesReducer?.schedulerTypes?.pxResults
  );
  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.loadingSchedulerTypes
  );

  useEffect(() => {
    if (storedUser === "null" || storedUser === null) {
      navigate("/login");
    }
  });

  const handleSearchType = (type, item) => {
    if (type === "id") {
      setSelectedId(item.SchedulerRefID);
    } else if (type === "type") {
      setSelectedType(item.Type);
    }
    dispatch(updateSelectedTypeDetails(item));
  };

  const toggleId = () => {
    setOpenId(!openId);
  };

  const toggleType = () => {
    setOpenType(!openType);
  };

  const handleGoSearch = () => {
    navigate("/scheduler" + (selectedId?`/${selectedId}`:"") + "?Type=" + selectedType);
  };
  const handleClear = () => {
    setSelectedId("");
    setSelectedType("");
  };

  useEffect(() => {
    dispatch(getSchedulerTypeDetails());
    dispatch(clearAvailabilities());
    dispatch(setActiveTab("1"));
  }, [dispatch]);

  const renderById = (schedulerTypes) => {
    return (
      <ButtonDropdown
        isOpen={openId}
        toggle={() => toggleId()}
        direction={(!openId && "down") || "up"}
        className="btn-scheduler-type"
      >
        <DropdownToggle caret>{selectedId || "Select id"}</DropdownToggle>
        {openId && (
          <DropdownMenu>
            {getUnique(schedulerTypes, "SchedulerRefID")?.map((item) => (
              <DropdownItem
                key={item.SchedulerRefID}
                onClick={(e) => handleSearchType("id", item)}
              >
                {item.SchedulerRefID}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </ButtonDropdown>
    );
  };

  const renderByType = (schedulerTypes) => {
    return (
      <ButtonDropdown
        isOpen={openType}
        toggle={() => toggleType()}
        direction={(!openType && "down") || "up"}
        className="btn-scheduler-type"
      >
        <DropdownToggle caret>{selectedType || "Select type"}</DropdownToggle>
        {openType && (
          <DropdownMenu>
            {getUnique(schedulerTypes, "Type")?.map((item) => (
              <DropdownItem
                key={item.Type}
                onClick={(e) => handleSearchType("type", item)}
              >
                {item.Type}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </ButtonDropdown>
    );
  };

  if (loader) {
    return (
      <div className="loader">
        <Spinner color="dark">Loading...</Spinner>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Container className="container-scheduler">
        <NavBar />
        <h4>Scheduler types</h4>
        {schedulerTypes && schedulerTypes.length > 0 && (
          <Row className="scheduler-types-buttons">
            <Col>
              <div className="header-search-by">Select by Id</div>
              {renderById(schedulerTypes)}
            </Col>
            <Col>
              <div className="header-search-by">Select by Type</div>
              {renderByType(schedulerTypes)}
            </Col>
            <Col>
              <div className="header-search-by">Search</div>
              <Button
                className="btn-scheduler-type"
                color="primary"
                onClick={() => handleGoSearch()}
                disabled={!selectedId && !selectedType}
              >
                Search
              </Button>
            </Col>
            <Col>
              <div className="header-search-by">Clear</div>
              <Button
                className="btn-scheduler-type"
                color="danger"
                onClick={() => handleClear()}
                disabled={!selectedId && !selectedType}
              >
                Clear
              </Button>
            </Col>
          </Row>
        )}
        {(!schedulerTypes || schedulerTypes.length < 1) && (
          <div className="no-availabilities-div">No scheduler types found</div>
        )}
      </Container>
    </>
  );
};

export default SchedulerTypesList;
