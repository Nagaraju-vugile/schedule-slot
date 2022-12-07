import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import CookieConsent from "react-cookie-consent";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import { getUnique } from "../helpers/ui_helper";
import {
  clearAvailabilities,
  getSchedulerTypeDetails,
  selectedProfileOption,
  setActiveTab,
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
    placeholder: "Find by id",
    value,
    onChange: onChange,
  };

  const inputPropsType = {
    placeholder: "Find by type",
    value: valueType,
    onChange: onChangeType,
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
    dispatch(selectedProfileOption("Settings"));
  }, [dispatch]);

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
        <Row style={{paddingBottom: "10px"}}><h4>Find available slots</h4></Row>
        {schedulerTypes && schedulerTypes.length > 0 && (
          <>
            <Row className="scheduler-types-buttons">
              <Col className="scheduler-types-col">
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                  shouldRenderSuggestions={shouldRenderSuggestions}
                />
              </Col>
              <Col className="scheduler-types-col">
                <Autosuggest
                  suggestions={suggestionsType}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequestedType}
                  onSuggestionsClearRequested={onSuggestionsClearRequestedType}
                  getSuggestionValue={getSuggestionValueType}
                  renderSuggestion={renderSuggestionType}
                  inputProps={inputPropsType}
                  shouldRenderSuggestions={shouldRenderSuggestionsType}
                />
              </Col>
              <Col className="scheduler-types-col">
                <Button
                  className="btn-scheduler-type"
                  color="primary"
                  onClick={() => handleGoSearch()}
                  disabled={!value && !valueType}
                >
                  Find slots
                </Button>
              </Col>
              <Col className="scheduler-types-col">
                <Button
                  className="btn-scheduler-type"
                  color="danger"
                  onClick={() => handleClear()}
                  disabled={!value && !valueType}
                >
                  Clear selection
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
      <CookieConsent
        location="bottom"
        buttonText="Please accept"
        cookieName="schedulerCoockies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        hideOnAccept
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default SchedulerTypesList;
