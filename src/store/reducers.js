import { combineReducers } from "redux";

import availabilitiesReducer from "./posts/reducer";

const rootReducer = combineReducers({
  availabilitiesReducer,
});

export default rootReducer;