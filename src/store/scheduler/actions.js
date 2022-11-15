import {
    GET_AVAILABILITIES,
    GET_AVAILABILITIES_SUCCESS,
    GET_AVAILABILITIES_FAIL,
    PREV_DATE_SELECTED,
    GET_SCHEDULER_TYPES,
    GET_SCHEDULER_TYPES_FAIL,
    GET_SCHEDULER_TYPES_SUCCESS,
    SELECTED_SLOT_DETAILS,
    BOOK_SLOT,
    BOOK_SLOT_SUCCESS,
    BOOK_SLOT_FAIL,
  } from "./actionTypes";
  
  export const getAvailabilities = (selectedStartDate, id, type) => {
    return {
      type: GET_AVAILABILITIES,
      payload: {selectedStartDate, id, type}
    };
  };
  
  export const getAvailabilitiesSuccess = (availabilities) => {
    return {
      type: GET_AVAILABILITIES_SUCCESS,
      payload: availabilities,
    };
  };
  
  export const getAvailabilitiesFail = (error) => {
    return {
      type: GET_AVAILABILITIES_FAIL,
      payload: error,
    };
  };

  export const selectedDataDisplay = (data)=>{
    return {
      type: PREV_DATE_SELECTED,
      payload: data
    }
  }

  export const getSchedulerTypeDetails = ()=>{
    return {
      type: GET_SCHEDULER_TYPES
    }
  }

  export const getSchedulerTypeDetailsSuccess = (data) => {
    return {
      type: GET_SCHEDULER_TYPES_SUCCESS,
      payload: data,
    };
  };
  
  export const getSchedulerTypeDetailsFail = (error) => {
    return {
      type: GET_SCHEDULER_TYPES_FAIL,
      payload: error,
    };
  };

  export const selectedSlotDetails = (data) =>{
    return {
      type: SELECTED_SLOT_DETAILS,
      payload: data
    }
  }

  export const bookSlot = (data) => {
    return {
      type: BOOK_SLOT,
      payload: {data}
    };
  };

  export const bookSlotSuccess = (data) => {
    return {
      type: BOOK_SLOT_SUCCESS,
      payload: data,
    };
  };
  
  export const bookSlotFail = (error) => {
    return {
      type: BOOK_SLOT_FAIL,
      payload: error,
    };
  };