import { combineReducers } from 'redux';

const businesses = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BUSINESS':
      return [ action.value, ...state ];
    case 'REMOVE_BUSINESS':
      const businesses = [ ...state ];
      businesses.splice(action.value, 1);
      return businesses;
    default:
      return state;
  }
}

const user = (state = null, action) => {
  switch(action.type) {
    case 'SET_USER':
      return state = action.value;
    default:
      return state;
  }
}

export default combineReducers({ businesses, user });