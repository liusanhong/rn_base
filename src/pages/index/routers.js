'use strict';

import { Platform,I18nManager } from 'react-native';
import { StackNavigator, TransitionConfigs } from 'react-navigation';
import store from '../../store';

// 初始化
import AppInit from './init';
// TAB
import {CTab, BTab} from './tab';

const appRouters = {
  AppInit: {screen: AppInit },
  CTab: {screen: CTab },
  BTab: {screen: BTab },
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
