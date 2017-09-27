'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class AppInit extends Component{
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.resetRouter()
  }

  resetRouter(){
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'CTab'}),
        // NavigationActions.navigate({ routeName: 'Splash'}),
      ]
    }))
  }

  render(){
    return null
  }
}

export default connect(
  ({
    nav
  })=>({
    nav
  })
)(AppInit);
