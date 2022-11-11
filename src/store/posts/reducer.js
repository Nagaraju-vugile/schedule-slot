import {
    GET_AVAILABILITIES,
    GET_AVAILABILITIES_SUCCESS,
    GET_AVAILABILITIES_FAIL,
    PREV_DATE_SELECTED,
    GET_SCHEDULER_TYPES,
    GET_SCHEDULER_TYPES_SUCCESS,
    GET_SCHEDULER_TYPES_FAIL,
    SELECTED_SLOT_DETAILS
  } from "./actionTypes";
  
  const initialState = {
    availabilities: [],
    loadingAvailabilities: false,
    error: {
      message: "",
    },
    prevDateSelected:new Date("2022-12-02"),
    loadingSchedulerTypes: false,
    schedulerTypes: [],
    selectedSlotDetails: null,
  };
  
  const availabilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_AVAILABILITIES:
        state = { ...state, loadingAvailabilities: true };
        break;
      case GET_AVAILABILITIES_SUCCESS:
        state = { ...state, availabilities: action.payload, loadingAvailabilities: false };
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
      case SELECTED_SLOT_DETAILS:
          state = {...state, selectedSlotDetails: action.payload};
          break;
      case GET_SCHEDULER_TYPES:
        state = { ...state, loadingSchedulerTypes: true };
        break;
      case GET_SCHEDULER_TYPES_SUCCESS:
        state = { ...state, schedulerTypes: action.payload, loadingSchedulerTypes: false };
        break;
      case GET_SCHEDULER_TYPES_FAIL:
          state = {
            ...state,
            error: {
              message: "Error",
            },
            loadingSchedulerTypes: false,
          };
        break;
      case PREV_DATE_SELECTED:
        state = {...state, prevDateSelected: action.payload};
        break;
      default:
          state = { ...state };
          break;
    }
    return state;
  };
  
  export default availabilitiesReducer;