import moment from "moment";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_AVAILABILITIES, GET_SCHEDULER_TYPES } from "./actionTypes";

import {
  getAvailabilitiesFail, getAvailabilitiesSuccess, getSchedulerTypeDetailsFail, getSchedulerTypeDetailsSuccess
} from "./actions";

import { getAvailabilities, getSchedulerTypeDetails } from "../../helpers/backend_helper";

function* onGetAvailabilities({payload: prevDateSelected, payload: id}) {
  try {
    const formattedDate = moment(prevDateSelected.prevDateSelected).utc().format('YYYYMMDD');
    const response = yield call(getAvailabilities, formattedDate, id.id);
    yield put(getAvailabilitiesSuccess(response));
  } catch (error) {
    yield put(getAvailabilitiesFail(error.response));
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

function* schedulerSaga() {
  yield takeLatest(GET_AVAILABILITIES, onGetAvailabilities);
  yield takeLatest(GET_SCHEDULER_TYPES, onGetSchedulerTypes);
}

export default schedulerSaga;