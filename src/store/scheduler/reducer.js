import {
  GET_AVAILABILITIES,
  GET_AVAILABILITIES_SUCCESS,
  GET_AVAILABILITIES_FAIL,
  PREV_DATE_SELECTED,
  GET_SCHEDULER_TYPES,
  GET_SCHEDULER_TYPES_SUCCESS,
  GET_SCHEDULER_TYPES_FAIL,
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
} from "./actionTypes";

const initialState = {
  availabilities: null,
  loadingAvailabilities: false,
  loadingPostDetails: false,
  error: {
    message: "",
  },
  // selectedStartDate: new Date("2022-12-02"),
  selectedStartDate: new Date(),
  loadingSchedulerTypes: false,
  schedulerTypes: [],
  selectedSlotDetails: null,
  bookedSlot: null,
  loadingBookSlot: false,
  selectedTypeDetails: null,
  userProfile: null,
  myBookings: null,
  myBookingsLoader: false,
  reschedulerDataSelected: null,
  cancelSlot: null,
  cancelSlotLoader: false,
  activeTab: "1",
};

const availabilitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AVAILABILITIES:
      state = { ...state, loadingAvailabilities: true };
      break;
    case GET_AVAILABILITIES_SUCCESS:
      state = {
        ...state,
        availabilities: action.payload,
        loadingAvailabilities: false,
      };
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
      state = { ...state, selectedSlotDetails: action.payload };
      break;
    case GET_SCHEDULER_TYPES:
      state = { ...state, loadingSchedulerTypes: true };
      break;
    case GET_SCHEDULER_TYPES_SUCCESS:
      state = {
        ...state,
        schedulerTypes: action.payload,
        loadingSchedulerTypes: false,
      };
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
      state = { ...state, selectedStartDate: action.payload };
      break;
    case BOOK_SLOT:
      state = { ...state, loadingBookSlot: true };
      break;
    case BOOK_SLOT_SUCCESS:
      state = {
        ...state,
        bookedSlot: action.payload,
        loadingBookSlot: false,
      };
      break;
    case BOOK_SLOT_FAIL:
      state = {
        ...state,
        error: {
          message: action.payload,
        },
        loadingBookSlot: false,
      };
      break;
    case SELECTED_TYPE_DETAILS:
      state = {
        ...state,
        selectedTypeDetails: action.payload,
      };
      break;
    case CLEAR_AVAILABILITIES:
      state = {
        ...state,
        availabilities: null,
      };
      break;
    case CLEAR_BOOKED_SLOTS:
      state = {
        ...state,
        bookedSlot: null,
      };
      break;
    case SET_USER_SESSION_DETAILS:
      state = {
        ...state,
        userProfile: action.payload,
      };
      break;
    case CLEAR_USER_SESSION_DETAILS:
      state = {
        ...state,
        userProfile: null,
      };
      break;
    case MY_BOOKINGS:
      state = { ...state, myBookingsLoader: true };
      break;
    case MY_BOOKINGS_SUCCESS:
      state = {
        ...state,
        myBookings: action.payload,
        myBookingsLoader: false,
      };
      break;
    case MY_BOOKINGS_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        myBookingsLoader: false,
      };
      break;
    case SELECTED_RESCHEDULER_DETAILS:
      state = {
        ...state,
        reschedulerDataSelected: action.payload,
      };
      break;
    case CANCEL_SLOT:
      state = { ...state, cancelSlotLoader: true };
      break;
    case CANCEL_SLOT_SUCCESS:
      state = {
        ...state,
        cancelSlot: action.payload,
        cancelSlotLoader: false,
      };
      break;
    case CANCEL_SLOT_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        cancelSlotLoader: false,
      };
      break;
    case SET_ACTIVE_TAB:
      state = {
        ...state,
        activeTab: action.payload,
      };
      break;
      case CLEAR_CANCEL_SLOTS:
        state = {
          ...state,
          cancelSlot: null,
        };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default availabilitiesReducer;
