'use strict';

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

let TabIcon = React.createClass({
	render(){
		let imageSource = {
			service : {normal: require('../assets/image/ic_mine_nav_nor.png'), selected: require('../assets/image/ic_mine_nav_hover.png')},
			choose : {normal: require('../assets/image/ic_choose-stock_nav_nor.png'), selected: require('../assets/image/ic_choose-stock_nav_hover.png')},
			trade : {normal: require('../assets/image/ic_transaction_nav_nor.png'), selected: require('../assets/image/ic_transaction_nav_hover.png')},
			selected : {normal: require('../assets/image/ic_optional-stock_nav_nor.png'), selected: require('../assets/image/ic_optional-stock_nav_hover.png')},
			mine : {normal: require('../assets/image/icon-wode1.png'), selected: require('../assets/image/icon-wode2.png')},
			contacts : {normal: require('../assets/image/icon-lianxiren1.png'), selected: require('../assets/image/icon-lianxiren2.png')},
		};

		let imageType = this.props.focused ? 'selected' : 'normal';
		let source = imageSource[this.props.inx][imageType];

		return (
			<View style={{flexDirection: 'column',justifyContent : 'center',alignItems: 'center'}}>
        <Image source={source} style={{width:24,height:24}} resizeMode="contain"/>
				<Text style={{marginTop: 2, color: this.props.focused ? '#e2373f' :'#a4a7ba',fontSize:10}}>{this.props.title}</Text>
			</View>
		)
	}
});

module.exports = TabIcon;
