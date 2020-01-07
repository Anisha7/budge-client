import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TimeFormScreen from '../screens/TimeForm'

// Authentication tabs
// const MainNavigation = createStackNavigator(
//   {
//     TimeForm: { screen: TimeFormScreen }
//   },
//   {
//     initialRouteName: "TimeForm",
//     headerMode: "screen",
//   }
// );

// Authentication tabs
const MainNavigation = createStackNavigator(
  {
    Home: { screen: TimeFormScreen }
  }
);

export default createAppContainer(MainNavigation);
