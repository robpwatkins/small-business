import { combineReducers } from 'redux';

const businesses = (state = [], action) => {
  switch(action.type) {
    case "REMOVE_BUSINESS":
      const businesses = [ ...state ];
      businesses.splice(action.value, 1);
      return businesses;
    default:
      return state;
  }
}

export default combineReducers({ businesses });