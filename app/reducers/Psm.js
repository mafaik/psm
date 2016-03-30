import * as types from '../constants/UserActionTypes';

const initialState = {
  status: 'IDLE',
  user: {},
  news: [],
  rewards: []
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
   case types.GET_NEWS_LOADING:
    return {
    ...state,
    news: [],
    status: 'LOADING'
   };
   case types.GET_NEWS_LOADING_FOR_NEXT:
    return {
    ...state,
     status: 'LOADING_FOR_NEXT'
   };
   case types.GET_NEWS_DONE:
    return {
    ...state,
     news: [...state.news, ...action.news],
     status: 'DONE',
     page: action.page,
     next: action.next
     
   };
   case types.GET_REWARDS_LOADING:
    return {
    ...state,
    rewards: [],
    status: 'LOADING'
   };
   case types.GET_REWARDS_LOADING_FOR_NEXT:
    return {
    ...state,
     status: 'LOADING_FOR_NEXT'
   };
   case types.GET_REWARDS_DONE:
    return {
    ...state,
     rewards: [...state.rewards, ...action.rewards],
     status: 'DONE',
     page: action.page,
     next: action.next
     
   };
  default:
    return state;
  }
}