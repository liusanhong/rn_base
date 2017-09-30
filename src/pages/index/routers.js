'use strict';

import { Platform,I18nManager } from 'react-native';
import { StackNavigator, TransitionConfigs } from 'react-navigation';
import store from '../../store';


import AppInit from './init'; // 初始化
import {CTab, BTab} from './tab'; //Tab
import Login from '../login'

const appRouters = {
  AppInit: {screen: AppInit },
  CTab: {screen: CTab },
  BTab: {screen: BTab },
  Login: {screen: Login},
}

const AppNavigator = StackNavigator(appRouters,{
  initialRouteName: 'AppInit',
  headerMode: 'none',
  transitionConfig: () => {
    let state = store.getState();
    let { index, routes } = state.nav;
    let { routeName } = routes[index]
    return {
      transitionSpec:{
        duration: appRouters[routeName].disableTransition?0:250
      }
    }
  },
});

export default AppNavigator
