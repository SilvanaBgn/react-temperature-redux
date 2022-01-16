// This file is to clean up reducers logic
import thermoReducer from "./thermometer";

import { combineReducers } from "redux";

// We need to combine the reducers, to pass it then all packed to the createStore in index.js
const allReducers = combineReducers({
  temperature: thermoReducer,
})

export default allReducers;