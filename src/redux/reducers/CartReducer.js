/* eslint-disable no-unreachable */
const INITIAL_STATE = [];

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
      break;

    case 'DELETE_ITEM':
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));

      break;

    default:
      return state;
      break;
  }
};

export default CartReducer;
