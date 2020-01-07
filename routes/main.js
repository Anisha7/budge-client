import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TimeFormScreen from '../screens/TimeForm'

// Authentication tabs
const MainNavigation = createStackNavigator(
  {
    TimeForm: { screen: TimeFormScreen }
  },
  {
    initialRouteName: "TimeForm",
    headerMode: "screen",
  }
);

export default createAppContainer(MainNavigation);
