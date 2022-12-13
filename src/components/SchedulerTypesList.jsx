import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import CookieConsent, { Cookies, resetCookieConsentValue } from "react-cookie-consent";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button, ButtonDropdown, Container, DropdownItem,
  DropdownMenu,
  DropdownToggle, Row, Spinner
} from "reactstrap";
import { messages } from "../constants";
import { getUnique } from "../helpers/ui_helper";
import {
  clearAvailabilities,
  getSchedulerTypeDetails,
  selectedProfileOption,
  setActiveTab
} from "../store/scheduler/actions";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

const SchedulerTypesList = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const storedUser = sessionStorage.getItem("userProfile");
  let path = useLocation().pathname;
  sessionStorage.setItem("prevLocation", path);
  const schedulerTypes = useSelector(
    (state) => state?.availabilitiesReducer?.schedulerTypes?.pxResults
  );
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState("");
  const [suggestionsType, setSuggestionsType] = useState([]);

  const [openId, setOpenId] = useState(false);

  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.loadingSchedulerTypes
  );

  const toggleId = () => {
    setOpenId(!openId);
  };

  const toggleType = () => {
    setOpenType(!openType);
  };

  useEffect(() => {
    if (storedUser === "null" || storedUser === null) {
      navigate("/login");
    }
  });

  useEffect(() => {
    if(Cookies.get("schedulerCookies") === true || Cookies.get("schedulerCookies") === "true"){
      Cookies.set("schedulerCookiesSet", sessionStorage.getItem("userProfile"));
    }
  }, [Cookies.get("schedulerCookies")]);

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp("^" + escapedValue, "i");
    return getUnique(schedulerTypes, "SchedulerRefID").filter((item) =>
      regex.test(item.SchedulerRefID)
    );
  };

  const getSuggestionsType = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp("^" + escapedValue, "i");
    return getUnique(schedulerTypes, "Type").filter((item) =>
      regex.test(item.Type)
    );
  };

  const getSuggestionValue = (suggestion) => {
    return suggestion.SchedulerRefID;
  };

  const getSuggestionValueType = (suggestion) => {
    return suggestion.Type;
  };

  const renderSuggestion = (suggestion) => (
    <div>{suggestion.SchedulerRefID}</div>
  );

  const renderSuggestionType = (suggestion) => <div>{suggestion.Type}</div>;

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
    if(value !== '')
    return true;
  }
  function shouldRenderSuggestionsType(value, reason) {
    if(value !== '')
    return true;
  }
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onChangeType = (event, { newValue }) => {
    setValueType(newValue);
  };

  const inputProps = {
    placeholder: messages.placeholder.findById,
    value,
    onChange: onChange,
  };

  const inputPropsType = {
    placeholder: messages.placeholder.findByType,
    value: valueType,
    onChange: onChangeType,
  };

  const handleSearchType = (type, item) => {
    if (type === "id") {
      setValue(item.SchedulerRefID);
    } else{
      setValueType(item.Type);
    }
  };

  const handleGoSearch = () => {
    navigate(
      "/scheduler" +
        (value ? `/${value}` : "") +
        (valueType ? `?Type=${valueType}` : "")
    );
  };
  const handleClear = () => {
    setValue("");
    setValueType("");
  };

  useEffect(() => {
    dispatch(getSchedulerTypeDetails());
    dispatch(clearAvailabilities());
    dispatch(setActiveTab("1"));
    dispatch(selectedProfileOption(messages.buttons.settings));
  }, [dispatch]);

  const renderById = (schedulerTypes) => {
    return (
      <ButtonDropdown
        isOpen={openId}
        toggle={() => toggleId()}
        direction={(!openId && "down") || "up"}
        className="btn-scheduler-type"
        style={{ height: "38px", width: "30px", marginTop: "1px" }}
      >
        <DropdownToggle
          caret
          data-toggle="dropdown"
          tag="span"
          className="dropdown-toggle-search"
          title="Select scheduler id"
        >
          <span className="label-select-btn">{messages.buttons.selectId}</span>
        </DropdownToggle>
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
        style={{ height: "38px", width: "30px", marginTop: "1px" }}
        color="link"
      >
        <DropdownToggle
          caret
          data-toggle="dropdown"
          tag="span"
          className="dropdown-toggle-search"
          title="Select scheduler type"
        >
          <span className="label-select-btn">{messages.buttons.selectType}</span>
        </DropdownToggle>
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

  return (
    <>
      <div className="layout-main">
        <Header />
        <Container className="container-scheduler">
          <NavBar />
          <Row className="booking-header" style={{ paddingBottom: "10px" }}>
            <h5 style={{ paddingLeft: "27px" }}>
              {messages.labels.showAvailablesSlots}
            </h5>
          </Row>
          {(loader && (
            <div className="loader">
              <Spinner animation="border" variant="warning">
                {messages.labels.loading}
              </Spinner>
            </div>
          )) || (
            <>
              {schedulerTypes && schedulerTypes.length > 0 && (
                <>
                  <div className="find-by-input">
                    <div
                      className="find-by-input-div"
                      style={{ minWidth: "25%" }}
                    >
                      <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={
                          onSuggestionsFetchRequested
                        }
                        onSuggestionsClearRequested={
                          onSuggestionsClearRequested
                        }
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        shouldRenderSuggestions={shouldRenderSuggestions}
                      />
                    </div>
                    <div className="find-by-input-div">
                      {renderById(schedulerTypes)}
                    </div>
                    <div
                      className="find-by-input-div"
                      style={{ minWidth: "25%" }}
                    >
                      <Autosuggest
                        suggestions={suggestionsType}
                        onSuggestionsFetchRequested={
                          onSuggestionsFetchRequestedType
                        }
                        onSuggestionsClearRequested={
                          onSuggestionsClearRequestedType
                        }
                        getSuggestionValue={getSuggestionValueType}
                        renderSuggestion={renderSuggestionType}
                        inputProps={inputPropsType}
                        shouldRenderSuggestions={shouldRenderSuggestionsType}
                      />
                    </div>
                    <div className="find-by-input-div">
                      {renderByType(schedulerTypes)}
                    </div>
                    <div className="find-by-input-div">
                      <Button
                        className="btn-scheduler-type"
                        color="primary"
                        onClick={() => handleGoSearch()}
                        disabled={!value && !valueType}
                      >
                        <AiOutlineSearch
                          style={{ marginBottom: "4px", marginRight: "6px" }}
                        />
                        {messages.buttons.findSlots}
                      </Button>
                    </div>
                    <div className="find-by-input-div">
                      <Button
                        className="btn-scheduler-type"
                        color="danger"
                        onClick={() => handleClear()}
                        disabled={!value && !valueType}
                      >
                        <AiOutlineClose
                          style={{ marginBottom: "4px", marginRight: "6px" }}
                        />
                        {messages.buttons.clearSelection}
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {(!schedulerTypes || schedulerTypes.length < 1) && (
                <div className="no-availabilities-div">
                  {messages.errorMessages.noSchedulers}
                </div>
              )}
            </>
          )}
        </Container>
        <Footer />
      </div>
      <CookieConsent
        location="top"
        buttonText="I accept"
        cookieName="schedulerCookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b" }}
        hideOnAccept
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            Cookies.set("schedulerCookies", true);
          } else {
            Cookies.set("schedulerCookies", true);
          }
        }}
        enableDeclineButton
        onDecline={() => {
          Cookies.set("schedulerCookies", false);
          resetCookieConsentValue();
        }}
      >
        {messages.cookiesContentMessage}
      </CookieConsent>
    </>
  );
};

export default SchedulerTypesList;
