import { combineReducers } from 'redux';
import loggedUserReducer from './loggedUserReducer';
import fetchPhotoReducer from './fetchPhotoReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    loggedUserState:loggedUserReducer,
    fetchPhotoState:fetchPhotoReducer,
});

export default rootReducer;