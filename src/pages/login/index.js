'use strict';

import React, { Component } from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import NavBar from '../../components/nav_bar'

const viewWidth = Dimensions.get('window').width;

class Login extends Component{
  constructor(props) {
    super(props);
  }

  state = {
    tab : 'register'
  }

  render(){
    return (
      <View style={{flex:1}}>
        {/* Tab */}
        <View style={{height:244,backgroundColor:'#0c182f', justifyContent:'space-between'}}>
          <Image source={require('../../assets/image/bg_top_login.jpg')} style={{position:'absolute', height:244, width:viewWidth,}} />
          <NavBar leftButtonType="GO_BACK" backgroundColor='transparent' />
          <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'flex-start', height:30}}>
            <TouchableOpacity onPress={()=>{this.setState({tab:'register'})}} style={{justifyContent:'space-between', height:30, alignItems:'center'}}>
              <Text style={{backgroundColor:'transparent', color:'#fff',fontSize:14}}>注册</Text>
              {this.state.tab=="register" && <Image style={{height:16, width:20}} source={require('../../assets/image/ic_arrow_login.png')}/>}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({tab:'login'})}} style={{justifyContent:'space-between', height:30, alignItems:'center'}}>
              <Text style={{backgroundColor:'transparent', color:'#fff',fontSize:14}}>登录</Text>
              {this.state.tab=="login" && <Image style={{height:16, width:20}} source={require('../../assets/image/ic_arrow_login.png')}/>}
            </TouchableOpacity>
          </View>
        </View>

        {/* 输入 */}
        <View style={{flex:1,backgroundColor:'#fff'}}>

        </View>
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
