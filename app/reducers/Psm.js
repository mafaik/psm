import * as types from '../constants/UserActionTypes';

const initialState = {
  status: 'IDLE',
  user: {},
};


export default function psm(state = initialState, action) {
  switch (action.type) {
  case types.SET_USER_PROFILE:
    return {
    ...state,
     user: {...state.user, ...action.user},
   };
   case types.SET_USER_DATA:
    return {
    ...state,
     user: {...state.user, ...action.user},
     status: 'SET'
   };
  case types.UPDATE_USER_DATA:
    return {
    ...state,
     user: {...state.user, ...action.user},
   };
   case types.RESET_USER_DATA:
    return {
    ...state,
     user: {...state.user, ...action.user},
     status: 'RESET'
   };
  default:
    return state;
  }
}