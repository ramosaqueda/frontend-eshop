import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import { userReducer } from './userReducer';
const rootReducers = combineReducers({
  CartReducer,
  userReducer,
});

export default rootReducers;
