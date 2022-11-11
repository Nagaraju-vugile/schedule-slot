import { all, fork } from "redux-saga/effects";

import AvailablitilesSaga from "./posts/saga";

export default function* rootSaga() {
  yield all([fork(AvailablitilesSaga)]);
}