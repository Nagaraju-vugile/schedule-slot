import { takeLatest, put, call } from "redux-saga/effects";
import moment from "moment";
import { BOOK_SLOT, CANCEL_SLOT, GET_AVAILABILITIES, GET_SCHEDULER_TYPES, MY_BOOKINGS } from "./actionTypes";

import {
  getAvailabilitiesSuccess,
  getAvailabilitiesFail,
  getSchedulerTypeDetailsSuccess,
  getSchedulerTypeDetailsFail,
  bookSlotSuccess,
  bookSlotFail,
  myBookingsSuccess,
  myBookingsFail,
  cancelSlotSuccess,
  cancelSlotFail,
} from "./actions";

import { bookSlot, cancelSlot, getAvailabilities, getMyBookings, getSchedulerTypeDetails } from "../../helpers/backend_helper";

function* onGetAvailabilities({payload: selectedStartDate, payload: id, payload: type}) {
  try {
    const formattedDate = moment(selectedStartDate.selectedStartDate).utc().format('YYYYMMDD');
    const response = yield call(getAvailabilities, formattedDate, id.id, type.type);
    yield put(getAvailabilitiesSuccess(response));
  } catch (error) {
    yield put(getAvailabilitiesFail(error.response));
  }
}

function* onGetMyBookings({ payload: data}) {
  try {
    const response = yield call(getMyBookings, data);
    yield put(myBookingsSuccess(response));
  } catch (error) {
    yield put(myBookingsFail(error.response));
  }
}

function* onBookSlot({payload: data}) {
  try {
    const response = yield call(bookSlot, data.data, data.typeCheck );
    yield put(bookSlotSuccess(response));
  } catch (error) {
    yield put(bookSlotFail(error.response));
  }
}

function* onCancelSlot({payload: data}) {
  try {
    const response = yield call(cancelSlot, data.data );
    yield put(cancelSlotSuccess(response));
  } catch (error) {
    yield put(cancelSlotFail(error.response));
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

function* AvailabilitiesSaga() {
  yield takeLatest(GET_AVAILABILITIES, onGetAvailabilities);
  yield takeLatest(GET_SCHEDULER_TYPES, onGetSchedulerTypes);
  yield takeLatest(BOOK_SLOT, onBookSlot);
  yield takeLatest(MY_BOOKINGS, onGetMyBookings);
  yield takeLatest(CANCEL_SLOT, onCancelSlot)
}

export default AvailabilitiesSaga;