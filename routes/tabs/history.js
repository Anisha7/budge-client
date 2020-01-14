import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";

const sample = () => {
    return (
        <Text>History page</Text>
    )
}
// Settings tabs
const HistoryNavigation = createStackNavigator(
    {
        Sample: { screen: sample },
    },
    {
      initialRouteName: 'Sample',
      headerMode: 'screen',
    }
  )

export default {
    screen: HistoryNavigation,
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => {
        return <Icon name="history" size={30} color={tintColor} />;
      }
    }
  }