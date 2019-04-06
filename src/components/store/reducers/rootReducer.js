import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  //which reducers to combine
  auth: authReducer,
  project: projectReducer

});

export default rootReducer //next import to index.js
 