import { combineReducers } from 'redux';

const isLoggedIn = (state = false) => state;

const businesses = (state = []) => state;

export default combineReducers({ isLoggedIn, businesses });