import { combineReducers } from 'redux';

import auth from './auth';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  auth
});