import { takeLatest, put, call } from "redux-saga/effects";
import {format} from 'date-fns';
import moment from "moment";
import { BOOK_SLOT, GET_AVAILABILITIES, GET_POST_DETAILS, GET_SCHEDULER_TYPES } from "./actionTypes";

import {
  getAvailabilitiesSuccess,
  getAvailabilitiesFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
  getSchedulerTypeDetailsSuccess,
  getSchedulerTypeDetailsFail,
  bookSlotSuccess,
  bookSlotFail,
} from "./actions";

import { bookSlot, getAvailabilities, getPostDetails, getSchedulerTypeDetails } from "../../helpers/backend_helper";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

function* onGetAvailabilities({payload: prevDateSelected, payload:nextDate, payload: id, payload: type}) {
  try {
    const formattedDate = moment(prevDateSelected.prevDateSelected).utc().format('YYYYMMDD');
    const formattedNextDate = moment(nextDate.nextDate).utc().format('YYYYMMDD');
    const response = yield call(getAvailabilities, formattedDate, formattedNextDate, id.id, type.type);
    yield put(getAvailabilitiesSuccess(response));
  } catch (error) {
    yield put(getAvailabilitiesFail(error.response));
  }
}

function* onBookSlot({payload: data}) {
  try {
    const response = yield call(bookSlot, data.data);
    yield put(bookSlotSuccess(response));
  } catch (error) {
    yield put(bookSlotFail(error.response));
  }
}

function* onGetSchedulerTypes() {
  try {
    const response = yield call(getSchedulerTypeDetails);
    yield put(getSchedulerTypeDetailsSuccess(response));
  } catch (error) {
    yield put(getSchedulerTypeDetailsFail(error.response));
  }
}

function* onGetPostDetails({ payload: id }) {
  try {
    const response = yield call(getPostDetails, id);
    yield put(getPostDetailsSuccess(response));
  } catch (error) {
    yield put(getPostDetailsFail(error.response));
  }
}

function* CartSaga() {
  yield takeLatest(GET_AVAILABILITIES, onGetAvailabilities);
  yield takeLatest(GET_SCHEDULER_TYPES, onGetSchedulerTypes);
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
  yield takeLatest(BOOK_SLOT, onBookSlot);
}

export default CartSaga;