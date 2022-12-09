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
    SELECTED_TYPE_DETAILS,
    CLEAR_AVAILABILITIES,
    CLEAR_BOOKED_SLOTS,
    SET_USER_SESSION_DETAILS,
    CLEAR_USER_SESSION_DETAILS,
    MY_BOOKINGS,
    MY_BOOKINGS_SUCCESS,
    MY_BOOKINGS_FAIL,
    SELECTED_RESCHEDULER_DETAILS,
    CANCEL_SLOT,
    CANCEL_SLOT_SUCCESS,
    CANCEL_SLOT_FAIL,
    SET_ACTIVE_TAB,
    CLEAR_CANCEL_SLOTS,
    SELECTED_PROFILE_OPTION,
    CLEAR_ERROR,
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

  export const bookSlot = (data, typeCheck) => {
    return {
      type: BOOK_SLOT,
      payload: {data, typeCheck}
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

  export const updateSelectedTypeDetails = (data)=>{
    return {
      type: SELECTED_TYPE_DETAILS,
      payload: data
    }
  }

  export const clearAvailabilities = ()=>{
    return {
      type: CLEAR_AVAILABILITIES,
    }
  }

  export const clearBookedSlots = ()=>{
    return {
      type: CLEAR_BOOKED_SLOTS,
    }
  }

  export const setUserSeesionDetails = (data)=>{
    return {
      type: SET_USER_SESSION_DETAILS,
      payload: data
    }
  }

  export const clearUserSessionDetails = ()=>{
    return {
      type: CLEAR_USER_SESSION_DETAILS,
    }
  }

  export const myBookings = (data) => {
    return {
      type: MY_BOOKINGS,
      payload: data,
    };
  };

  export const myBookingsSuccess = (data) => {
    return {
      type: MY_BOOKINGS_SUCCESS,
      payload: data,
    };
  };
  
  export const myBookingsFail = (error) => {
    return {
      type: MY_BOOKINGS_FAIL,
      payload: error,
    };
  };

  export const selectedReschedulerDetails = (data)=>{
    return {
      type: SELECTED_RESCHEDULER_DETAILS,
      payload: data
    }
  }

  export const cancelSlot = (data) => {
    return {
      type: CANCEL_SLOT,
      payload: {data}
    };
  };

  export const cancelSlotSuccess = (data) => {
    return {
      type: CANCEL_SLOT_SUCCESS,
      payload: data,
    };
  };

  export const cancelSlotFail = (error) => {
    return {
      type: CANCEL_SLOT_FAIL,
      payload: error,
    };
  };

  export const setActiveTab = (data) => {
    return {
      type: SET_ACTIVE_TAB,
      payload: data
    };
  };

  export const clearCancelSlots = ()=>{
    return {
      type: CLEAR_CANCEL_SLOTS,
    }
  }

  export const selectedProfileOption = (data) => {
    return {
      type: SELECTED_PROFILE_OPTION,
      payload: data
    };
  };

  export const clearError = ()=>{
    return {
      type: CLEAR_ERROR,
    }
  }

