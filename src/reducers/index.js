'use strict';

import { combineReducers } from 'redux';
// 路由
import nav from './nav';
// 用户信息
import user from './user';

export default combineReducers({
  nav,
  user
})
