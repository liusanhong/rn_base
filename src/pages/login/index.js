'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import NavBar from '../../components/nav_bar'

class Login extends Component{
  constructor(props) {
    super(props);
  }

  state = {

  }

  render(){
    return (
      <View style={{flex:1}}>
        <NavBar leftButtonType="GO_BACK" />
      </View>
    )
  }
}

export default connect(
  ({
    nav
  })=>({
    nav
  })
)(Login);
