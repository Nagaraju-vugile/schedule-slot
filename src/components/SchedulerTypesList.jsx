import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
  selectedProfileOption,
  setActiveTab,
  updateSelectedTypeDetails,
} from "../store/scheduler/actions";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import Autosuggest from 'react-autosuggest';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

const SchedulerTypesList = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const storedUser = sessionStorage.getItem("userProfile");
  let path = useLocation().pathname;
  sessionStorage.setItem("prevLocation", path);
  const [openId, setOpenId] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [typeVal, setTypeVal] = useState("");
  const schedulerTypes = useSelector(
    (state) => state?.availabilitiesReducer?.schedulerTypes?.pxResults
  );
  const [emailValues, setEmailValues] = useState(null);
  const [typeValues, setTypeValues] = useState(null);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [valueType, setValueType] = useState("");
  const [suggestionsType, setSuggestionsType] = useState([]);

  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.loadingSchedulerTypes
  );

  useEffect(() => {
    if (storedUser === "null" || storedUser === null) {
      navigate("/login");
    }
  });

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp('^' + escapedValue, 'i');
  return getUnique(schedulerTypes, "SchedulerRefID").filter(item => regex.test(item.SchedulerRefID));
  };

  const getSuggestionsType = value => {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp('^' + escapedValue, 'i');
    return getUnique(schedulerTypes, "Type").filter(item => regex.test(item.Type));
  };
  
  const getSuggestionValue = suggestion => {
    return suggestion.SchedulerRefID};
  
    const getSuggestionValueType = suggestion => {
      return suggestion.Type};

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.SchedulerRefID}
    </div>
  );

  const renderSuggestionType = suggestion => (
    <div>
      {suggestion.Type}
    </div>
  );

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsFetchRequestedType = ({ value }) => {
    setSuggestionsType(getSuggestionsType(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionsClearRequestedType = () => {
    setSuggestionsType([]);
  };


  function shouldRenderSuggestions(value, reason) {
    return true;
  }
  function shouldRenderSuggestionsType(value, reason) {
    return true;
  }
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onChangeType = (event, { newValue }) => {
    setValueType(newValue);
  };

  const inputProps = {
    placeholder: 'Enter id',
    value,
    onChange: onChange,
  };

  const inputPropsType = {
    placeholder: 'Enter Type',
    value: valueType,
    onChange: onChangeType,
  };

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
    navigate(
      "/scheduler" +
        (value ? `/${value}` : "") + (valueType ? `?Type=${valueType}` : "")
    );
  };
  const handleClear = () => {
    setSelectedId("");
    setSelectedType("");
    setValue("");
    setValueType("");
  };

  useEffect(() => {
    dispatch(getSchedulerTypeDetails());
    dispatch(clearAvailabilities());
    dispatch(setActiveTab("1"));
    dispatch(selectedProfileOption("Settings"));
  }, [dispatch]);

  useEffect(() => {
    setEmailValues(getUnique(schedulerTypes, "SchedulerRefID"));
    setTypeValues(getUnique(schedulerTypes, "Type"));
  }, []);

  // const handleSearchBy = (e) => {
  //   setEmailVal(e.target.value);
  //   const filteredData = schedulerTypes.filter((item) =>
  //     item.SchedulerRefID.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   if (emailVal.trim() === "") {
  //     setEmailValues(schedulerTypes);
  //   } else {
  //     setEmailValues(filteredData);
  //   }
  // };

  // const handleSearchByType = (e) => {
  //   setTypeVal(e.target.value);
  //   const filteredData = schedulerTypes.filter((item) =>
  //     item.Type.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   if (typeVal.trim() === "") {
  //     setTypeValues(schedulerTypes);
  //   } else {
  //     setTypeValues(filteredData);
  //   }
  // };
  // const renderById = (schedulerTypes) => {
  //   return (
  //     <ButtonDropdown
  //       isOpen={openId}
  //       toggle={() => toggleId()}
  //       direction={(!openId && "down") || "up"}
  //       className="btn-scheduler-type"
  //     >
  //       <DropdownToggle caret>{selectedId || "Select id"}</DropdownToggle>
  //       {(openId || emailVal === "")&& (
  //         <DropdownMenu>
  //           {emailValues?.map((item) => (
  //             <DropdownItem
  //               key={item.SchedulerRefID}
  //               onClick={(e) => handleSearchType("id", item)}
  //             >
  //               {item.SchedulerRefID}
  //             </DropdownItem>
  //           ))}
  //         </DropdownMenu>
  //       )}
  //     </ButtonDropdown>
  //   );
  // };

  // const renderByType = (schedulerTypes) => {
  //   return (
  //     <ButtonDropdown
  //       isOpen={openType}
  //       toggle={() => toggleType()}
  //       direction={(!openType && "down") || "up"}
  //       className="btn-scheduler-type"
  //     >
  //       <DropdownToggle caret>{selectedType || "Select type"}</DropdownToggle>
  //       {openType && (
  //         <DropdownMenu>
  //           {typeValues?.map((item) => (
  //             <DropdownItem
  //               key={item.Type}
  //               onClick={(e) => handleSearchType("type", item)}
  //             >
  //               {item.Type}
  //             </DropdownItem>
  //           ))}
  //         </DropdownMenu>
  //       )}
  //     </ButtonDropdown>
  //   );
  // };

  console.log("-------------COOKIC",getCookieConsentValue());

  if (loader) {
    return (
      <div className="loader">
        <Spinner color="dark">Loading...</Spinner>
      </div>
    );
  }

  return (
    <div className="layout-main">
      <Header />
      <Container className="container-scheduler">
        <NavBar />
        <h4>Scheduler types</h4>
        {schedulerTypes && schedulerTypes.length > 0 && (
          <>
            <Row className="scheduler-types-buttons">
              <Col>
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                  shouldRenderSuggestions={shouldRenderSuggestions}
                />
                {/* <div className="header-search-by">
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={(e) => handleSearchBy(e)}
                  />
                </div>
                {renderById(schedulerTypes)} */}
              </Col>
              <Col>
                <Autosuggest
                  suggestions={suggestionsType}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequestedType}
                  onSuggestionsClearRequested={onSuggestionsClearRequestedType}
                  getSuggestionValue={getSuggestionValueType}
                  renderSuggestion={renderSuggestionType}
                  inputProps={inputPropsType}
                  shouldRenderSuggestions={shouldRenderSuggestionsType}
                />
                {/* <div className="header-search-by">
                  <Input
                    type="text"
                    name="scheduleType"
                    id="scheduleType"
                    placeholder="Enter type"
                    onChange={(e) => handleSearchByType(e)}
                  />
                </div>
                {renderByType(schedulerTypes)} */}
              </Col>
              <Col>
                {/* <div className="header-search-by">Search</div> */}
                <Button
                  className="btn-scheduler-type"
                  color="primary"
                  onClick={() => handleGoSearch()}
                  disabled={!value && !valueType}
                >
                  Search
                </Button>
              </Col>
              <Col>
                {/* <div className="header-search-by">Clear</div> */}
                <Button
                  className="btn-scheduler-type"
                  color="danger"
                  onClick={() => handleClear()}
                  disabled={!value && !valueType}
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </>
        )}
        {(!schedulerTypes || schedulerTypes.length < 1) && (
          <div className="no-availabilities-div">No scheduler types found</div>
        )}
      </Container>
      <Footer />
      {/* <CookieConsent
        location="bottom"
        buttonText="Please accept"
        cookieName="schedulerCoockies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        hideOnAccept
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}
    </div>
  );
};

export default SchedulerTypesList;
