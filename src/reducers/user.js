'use strict';
import * as types from '../constants/ActionTypes';

import { LOAD, SAVE } from 'redux-storage';

const initialState = {
  isLogin: false,
  userInfo: {}
};

export default function reducer(state = initialState, action) {
  const { payload, error, meta = {}, type } = action;

  switch (type) {
    case LOAD:
      return {
        ...state,
        isLogin: state.userInfo.is_login || false,
      };
      break;
    case types.LOGIN:
      return {
        ...state,
        isLogin: true,
        userInfo: action.info,
      };
      break;
    case types.LOGOUT:
      appStorage.clearMap();
      return {
        ...state,
        isLogin: false,
        userInfo: {},
      };
      break;
    case types.UPDATE_USERINFO:
      return {
        ...state,
        isLogin : action.info.is_login,
        userInfo: action.info,
      };
      break;
    case types.GET_USER_INFO:
      return {
        ...state,
        isLogin : payload.is_login,
        userInfo: payload,
      }
      break;
    default:
      return state;
  }
}
