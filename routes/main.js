import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

import AuthHomeScreen from '../screens/AuthHome';
import SignupScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';

import TimerNavigation from './tabs/timer';
import UserNavigation from './tabs/user';
import HistoryNavigation from './tabs/history';

// Authentication tabs
const AuthNavigation = createStackNavigator(
  {
    AuthHome: { screen: AuthHomeScreen },
    Signup: { screen: SignupScreen },
    Login: { screen: LoginScreen }
  },
  {
    initialRouteName: "AuthHome",
    headerMode: "screen",
  }
);

const TabBarComponent = props => <BottomTabBar {...props} />;
// Tabs: Settings, Home, Wallet, Goals
const AppNavigation = createBottomTabNavigator(
  {
    Timer: TimerNavigation,
    User: UserNavigation,
    History: HistoryNavigation,
  },
  {
    initialRouteName: "Timer",
    headerMode: "screen",
    tabBarComponent: props => (
      <TabBarComponent
        {...props}
        style={{ backgroundColor: "#31323F"}}
      />
    ),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#A55FD0',
      inactiveTintColor: '#8F8E98'
    },
    
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation
  },
  {
    initialRouteName: "Auth",
    headerMode: "screen",
  },
);

export default createAppContainer(SwitchNavigator);
