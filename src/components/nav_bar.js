'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, Image} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class NavBar extends Component {
  constructor(props){
    super(props);
    this._pop = this._pop.bind(this)
  }

  componentDidMount(){
    this._updateStatusBar();
  }

  _updateStatusBar(){
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle(this.props.statusBarColor == 'default' ? 'default' : 'light-content', true);
      StatusBar.setHidden(this.props.statusBarType == 'hidden');
    }
  }

  _ButtonElement(type, fn, sideStyle){
    if(!type) return <View/>;

    const buttonsMap = {
      "GO_BACK" : <Image source={require('../assets/image/top_icon_back.png')} style={{width:10,height:20,resizeMode:'contain'}}/>,
    };

    if(fn === false){
      return (
        <View style={[styles.sideButtonContainer,sideStyle]}>
          {buttonsMap[type]||type}
        </View>
      )
    }else{
      return (
        <TouchableOpacity style={[styles.sideButtonContainer,sideStyle]} onPress={fn || this._pop}>
          {buttonsMap[type]||type}
        </TouchableOpacity>
      )
    }
  }

  _pop(){
    this.props.dispatch(NavigationActions.back(null));
  }

  _renderTitle(title){
    if(typeof title == 'string'){
      title = <Text style={[styles.titleText,{color:this.props.tintColor || "#fff"}]}>{this.props.title}</Text>
    }

    return (
      <View style={{position:'absolute',justifyContent:'center',alignItems:'center',top:0,left:0,right:0,bottom:0,paddingLeft:20,paddingRight:20}}>
        {title}
      </View>
    )
  }

  render(){
    return (
      <View style={[this.props.style, {backgroundColor : this.props.backgroundColor || "#03142e"}]}>
        {this.props.statusBarOnly?null:<View
          style={[styles.navBar, {marginTop:this.props.statusBarType == 'hidden' || Platform.OS =='android'?0:20,}, this.props.height?{height:this.props.height}:null]}>
          {this._renderTitle(this.props.title)}
          {this._ButtonElement(this.props.leftButtonType,this.props.leftButtonAction,styles.leftBtnStyle)}
          {this._ButtonElement(this.props.rightButtonType,this.props.rightButtonAction,styles.rightBtnStyle)}
        </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'center',
  },
  titleText:{
    fontSize:16,
  },
  sideButtonContainer:{
    paddingLeft : 15,
    paddingRight : 15,
    height: 44,
    flexDirection:'row',
    alignItems : 'center',
  },
});

export default connect()(NavBar);
