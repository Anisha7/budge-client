import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import TimeFormScreen from '../../screens/TimeForm';
import TimerScreen from '../../screens/Timer';
import SummaryScreen from '../../screens/Summary';
import Icon from "react-native-vector-icons/FontAwesome";

// Settings tabs
const TimerNavigation = createStackNavigator(
    {
        TimeForm: { screen: TimeFormScreen },
        Timer: { screen: TimerScreen },
        Summary: { screen: SummaryScreen }
    },
    {
      initialRouteName: 'TimeForm',
      headerMode: 'screen',
    }
  )

export default {
    screen: TimerNavigation,
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => {
        return <Icon name="tachometer" size={30} color={tintColor} />;
      }
    }
  }