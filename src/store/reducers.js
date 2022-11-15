import { combineReducers } from "redux";

import availabilitiesReducer from "./scheduler/reducer";

const rootReducer = combineReducers({
  availabilitiesReducer,
});

export default rootReducer;