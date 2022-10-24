import { combineReducers } from "redux";
import agentReducer from "./Agent";

const allReducers = combineReducers({
    agent: agentReducer
});

export default allReducers;