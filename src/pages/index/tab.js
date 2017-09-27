'use strict';

import React from 'react';
import { Image, View, Text } from 'react-native';
import { TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation';

import store from '../../store';
import TabIcon from '../../components/tab_icon'

import TabService from '../tab_service';
import TabSelected from '../tab_selected';
import TabChoose from '../tab_choose';
import TabTrade from '../tab_trade';
import TabMine from '../tab_mine';
import TabContacts from '../tab_contacts';

TabService.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <TabIcon focused={focused} inx='service' title="服务"/>
  ),
};
TabChoose.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <TabIcon focused={focused} inx='choose' title="选股"/>
  ),
};
TabTrade.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <TabIcon focused={focused} inx='trade' title="交易"/>
  ),
};
TabSelected.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <TabIcon focused={focused} inx='selected' title="自选"/>
  ),
};
TabMine.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <TabIcon focused={focused} inx='mine' title="我的"/>
  ),
};
TabContacts.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <TabIcon focused={focused} inx='contacts' title="联系人"/>
  ),
};

export const CTab = TabNavigator({
    TabService: {
      screen: TabService,
    },
    TabChoose: {
      screen: TabChoose,
    },
    TabTrade: {
      screen: TabTrade,
    },
    TabSelected: {
      screen: TabSelected,
    },
  },{
    tabBarPosition : 'bottom',
    swipeEnabled: false,
    animationEnabled:false,
    tabBarOptions: {
      showLabel: false,
      style : {
        borderTopColor:"#ccc",
        backgroundColor:'#f2f5f9',
        height:50,
      },
    }
  }
);

export const BTab = TabNavigator({
    TabMine: {
      screen: TabMine,
    },
    TabChoose: {
      screen: TabChoose,
    },
    TabContacts: {
      screen: TabContacts,
    },
    TabSelected: {
      screen: TabSelected,
    },
  },{
    tabBarPosition : 'bottom',
    swipeEnabled: false,
    animationEnabled:false,
    tabBarOptions: {
      showLabel: false,
      style : {
        borderTopColor:"#ccc",
        backgroundColor:'#f2f5f9',
        height:50,
      },
    }
  }
);
