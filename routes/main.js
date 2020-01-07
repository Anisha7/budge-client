import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TimeFormScreen from '../screens/TimeForm';
import TimerScreen from '../screens/Timer';
import SummaryScreen from '../screens/Summary';

// Authentication tabs
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

export default createAppContainer(MainNavigation);
