'use strict';

import React, {Component} from 'react';
import { Image, View, Text } from 'react-native';
import {connect} from 'react-redux';

class TabService extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <View><Text>123</Text></View>
  }
}

export default connect(
  ({
    nav
  })=>({
    nav
  })
)(TabService)
