/**
 * 智能选股APP入口
*/
'use strict';

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';

import AppWithNavigationState from './src/pages/index';

class TougudashiApp extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('tougudashi', () => TougudashiApp);

export default TougudashiApp;
