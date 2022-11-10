import {
    GET_AVAILABILITIES,
    GET_AVAILABILITIES_SUCCESS,
    GET_AVAILABILITIES_FAIL,
    GET_POST_DETAILS,
    GET_POST_DETAILS_SUCCESS,
    GET_POST_DETAILS_FAIL,
    SELECTED_DATE,
    PREV_DATE_SELECTED,
    GET_SCHEDULER_TYPES,
    GET_SCHEDULER_TYPES_FAIL,
    GET_SCHEDULER_TYPES_SUCCESS,
    SELECTED_SLOT_DETAILS,
  } from "./actionTypes";
  
  export const getAvailabilities = (prevDateSelected, nextDate, id) => {
    // console.log("action payload***",prevDateSelected)
    return {
      type: GET_AVAILABILITIES,
      payload: {prevDateSelected, nextDate, id}
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
  
  export const getPostDetails = (id) => {
    return {
      type: GET_POST_DETAILS,
      payload: id,
    };
  };
  
  export const getPostDetailsSuccess = (post) => {
    return {
      type: GET_POST_DETAILS_SUCCESS,
      payload: post,
    };
  };
  
  export const getPostDetailsFail = (error) => {
    return {
      type: GET_POST_DETAILS_FAIL,
      payload: error,
    };
  };

  export const selectedDate = (date) =>{
    return {
      type: SELECTED_DATE,
      payload: date
    }
  }

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