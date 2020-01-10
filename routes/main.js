import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AuthHomeScreen from '../screens/AuthHome';
import SignupScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';

import TimeFormScreen from '../screens/TimeForm';
import TimerScreen from '../screens/Timer';
import SummaryScreen from '../screens/Summary';

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

// Main tabs
const MainNavigation = createStackNavigator(
  {
    TimeForm: { screen: TimeFormScreen },
    Timer: { screen: TimerScreen },
    Summary: { screen: SummaryScreen }
  },
  {
    initialRouteName: "TimeForm",
    headerMode: "screen",
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: MainNavigation
  },
  {
    initialRouteName: "Auth",
    headerMode: "screen",
  },
);

export default createAppContainer(SwitchNavigator);
