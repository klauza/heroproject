import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  //which reducers to combine
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});

export default rootReducer //next import to index.js
 