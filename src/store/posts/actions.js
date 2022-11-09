import {
    GET_AVAILABILITIES,
    GET_AVAILABILITIES_SUCCESS,
    GET_AVAILABILITIES_FAIL,
    GET_POST_DETAILS,
    GET_POST_DETAILS_SUCCESS,
    GET_POST_DETAILS_FAIL,
    SELECTED_DATE,
    PREV_DATE_SELECTED,
  } from "./actionTypes";
  
  export const getAvailabilities = (prevDateSelected, nextDate) => {
    // console.log("action payload***",prevDateSelected)
    return {
      type: GET_AVAILABILITIES,
      payload: {prevDateSelected, nextDate}
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