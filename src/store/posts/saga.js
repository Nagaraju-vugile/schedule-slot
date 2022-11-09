import { takeLatest, put, call } from "redux-saga/effects";
import {format} from 'date-fns';
import moment from "moment";
import { GET_AVAILABILITIES, GET_POST_DETAILS } from "./actionTypes";

import {
  getAvailabilitiesSuccess,
  getAvailabilitiesFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
} from "./actions";

import { getAvailabilities, getPostDetails } from "../../helpers/backend_helper";

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

function* onGetAvailabilities({payload: prevDateSelected, payload:nextDate}) {
  try {
    // console.log("prevDateSelected saga****", prevDateSelected.prevDateSelected, nextDate.nextDate)

    // const year = new Date(prevDateSelected).getFullYear();
    // const month = new Date(prevDateSelected).getMonth();
    // const day = new Date(prevDateSelected).getDay();
    // const dat = year + ''+month+''+day;
    const formattedDate = moment(prevDateSelected.prevDateSelected).utc().format('YYYYMMDD');
    const formattedNextDate = moment(nextDate.nextDate).utc().format('YYYYMMDD');
    // console.log("moment***********",moment(prevDateSelected).utc().format('YYYY-MM-DD'));
    // console.log("dat******+++++++", dat)
    // console.log("dat-----",new Date(prevDateSelected).getFullYear()+''+new Date(prevDateSelected).getMonth()+''+new Date(prevDateSelected).getDay());
    const response = yield call(getAvailabilities, formattedDate, formattedNextDate);
    yield put(getAvailabilitiesSuccess(response));
  } catch (error) {
    yield put(getAvailabilitiesFail(error.response));
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
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default CartSaga;