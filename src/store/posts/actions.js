import {
    GET_AVAILABILITIES,
    GET_AVAILABILITIES_SUCCESS,
    GET_AVAILABILITIES_FAIL,
    PREV_DATE_SELECTED,
    GET_SCHEDULER_TYPES,
    GET_SCHEDULER_TYPES_FAIL,
    GET_SCHEDULER_TYPES_SUCCESS,
    SELECTED_SLOT_DETAILS,
  } from "./actionTypes";
  
  export const getAvailabilities = (prevDateSelected, id) => {
    return {
      type: GET_AVAILABILITIES,
      payload: {prevDateSelected, id}
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

  export const selectedDataDisplayT = (data)=>{
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

  export const getSchedulerTypeDetailsSuccess = (post) => {
    return {
      type: GET_SCHEDULER_TYPES_SUCCESS,
      payload: post,
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