import {combineReducers} from 'redux';
import lyceeReducer from "./lycee";
import createMessage from "./createMessage";

export default combineReducers({
  lycee: lyceeReducer,
  createMessage: createMessage
})
