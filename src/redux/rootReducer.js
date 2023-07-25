import { counterReducer } from "@/redux/counter/counterReducer";
import { dynamicCounterReducer } from "@/redux/dynamicCounter/dynamicCounterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
});

export default rootReducer;
