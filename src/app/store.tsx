import { createStore } from 'redux';

// Define the initial state
const initialState = {
  money: 0,
};

// Define the actions
export const SET_MONEY = 'SET_MONEY';

export function setMoney(newMoney) {
  return {
    type: SET_MONEY,
    payload: newMoney,
  };
}

// Define the reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MONEY:
      return {
        ...state,
        money: action.payload,
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(reducer);

export default store;