import {
    GET_AVAILABILITIES,
    GET_AVAILABILITIES_SUCCESS,
    GET_AVAILABILITIES_FAIL,
    GET_POST_DETAILS,
    GET_POST_DETAILS_SUCCESS,
    GET_POST_DETAILS_FAIL,
    SELECTED_DATE,
    PREV_DATE_SELECTED
  } from "./actionTypes";
  
  const initialState = {
    availabilities: [],
    post: {},
    loadingAvailabilities: false,
    loadingPostDetails: false,
    error: {
      message: "",
    },
    selectedDate: new Date()+'',
    prevDateSelected:new Date("2022-12-02"),
  };
  
  const availabilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_AVAILABILITIES:
        state = { ...state, loadingAvailabilities: true };
        break;
      case GET_AVAILABILITIES_SUCCESS:
        state = { ...state, availabilities: action.payload, loadingAvailabilities: false };
        break;
      case SELECTED_DATE:
        state = {...state, selectedDate: action.payload+''};
        // break;
      case PREV_DATE_SELECTED:
        state = {...state, prevDateSelected: action.payload};
        break;
      case GET_AVAILABILITIES_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingAvailabilities: false,
        };
        break;
      case GET_POST_DETAILS:
        state = { ...state, loadingPostDetails: true };
        break;
      case GET_POST_DETAILS_SUCCESS:
        state = { ...state, post: action.payload[0], loadingPostDetails: false };
        break;
      case GET_POST_DETAILS_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingPostDetails: false,
        };
        break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default availabilitiesReducer;