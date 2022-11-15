import { all, fork } from "redux-saga/effects";

import scheduleSaga from "./scheduler/saga";

export default function* rootSaga() {
  yield all([fork(scheduleSaga)]);
}