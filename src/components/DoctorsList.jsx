import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonDropdown,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Spinner
} from "reactstrap";
import { clearAvailabilities, getSchedulerTypeDetails, updateSelectedTypeDetails } from "../store/scheduler/actions";

const DoctorsList = ()=>{
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [selectedId, setSelectedId]= useState('');
  const [selectedType, setSelectedType] = useState('');

  const schedulerTypes = useSelector(
    (state) => state?.availabilitiesReducer?.schedulerTypes?.pxResults
  );
  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.loadingSchedulerTypes
  );

  const handleSearchType = (type,item)=>{
    if(type === "id"){
      setSelectedId(item.SchedulerRefID);
    } else if(type === "type"){
      setSelectedType(item.Type)
    }
    dispatch(updateSelectedTypeDetails(item));
  }

  const toggleId = ()=>{
    setOpenId(!openId)
  }

  const toggleType = ()=>{
    setOpenType(!openType)
  }

  const handleGoSearch = ()=>{
    navigate("/scheduler/" + selectedId  + "?Type=" + selectedType);
  }
  const handleClear = ()=>{
      setSelectedId('');
      setSelectedType('');
    }
  

  useEffect(() => {
    dispatch(getSchedulerTypeDetails());
    dispatch(clearAvailabilities());
  }, [dispatch]);

  const renderById = (schedulerTypes) => {
    return (
      <ButtonDropdown
        isOpen={openId}
        toggle={() => toggleId()}
        direction={(!openId && "down") || "up"}
      >
        <DropdownToggle caret>{selectedId || "Select id"}</DropdownToggle>
        {openId && (
          <DropdownMenu>
            {schedulerTypes?.map((item) => (
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
      >
        <DropdownToggle caret>{selectedType || "Select type"}</DropdownToggle>
        {openType && (
          <DropdownMenu>
            {schedulerTypes?.map((item) => (
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
    return <div className="loader">
    <Spinner color="dark">
      Loading...
    </Spinner>
  </div>
  }

  return (
    <>
      <div className="content">
        {/* <Container> */}
          <Row>
            <Col xs="4">
              <div className="header-search-by">Select by Id</div>
              {renderById(schedulerTypes)}
            </Col>
            <Col xs="3">
              <div className="header-search-by">Select by Type</div>
              {renderByType(schedulerTypes)}
            </Col>
            <Col xs="2">
            <div className="header-search-by">Search</div>
            <Button color="primary" onClick = {()=>handleGoSearch()} disabled={!selectedId && !selectedType}>Search</Button>
            </Col>
            <Col xs="2">
            <div className="header-search-by">Clear</div>
            <Button color="danger" onClick = {()=>handleClear()} disabled={!selectedId && !selectedType}>Clear</Button>
            </Col>
          </Row>
        {/* </Container> */}
      </div>
    </>
  );
}

export default DoctorsList;