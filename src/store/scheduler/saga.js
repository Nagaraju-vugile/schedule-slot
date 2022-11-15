import { takeLatest, put, call } from "redux-saga/effects";
import moment from "moment";
import { BOOK_SLOT, GET_AVAILABILITIES, GET_SCHEDULER_TYPES } from "./actionTypes";

import {
  getAvailabilitiesSuccess,
  getAvailabilitiesFail,
  getSchedulerTypeDetailsSuccess,
  getSchedulerTypeDetailsFail,
  bookSlotSuccess,
  bookSlotFail,
} from "./actions";

import { bookSlot, getAvailabilities, getSchedulerTypeDetails } from "../../helpers/backend_helper";

function* onGetAvailabilities({payload: selectedStartDate, payload: id, payload: type}) {
  try {
    const formattedDate = moment(selectedStartDate.selectedStartDate).utc().format('YYYYMMDD');
    const response = yield call(getAvailabilities, formattedDate, id.id, type.type);
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

function* AvailabilitiesSaga() {
  yield takeLatest(GET_AVAILABILITIES, onGetAvailabilities);
  yield takeLatest(GET_SCHEDULER_TYPES, onGetSchedulerTypes);
  yield takeLatest(BOOK_SLOT, onBookSlot);
}

export default AvailabilitiesSaga;