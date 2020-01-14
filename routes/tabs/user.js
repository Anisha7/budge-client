import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";

const sample = () => {
    return (
        <Text>User page</Text>
    )
}
// Settings tabs
const UserNavigation = createStackNavigator(
    {
        Sample: { screen: sample },
    },
    {
      initialRouteName: 'Sample',
      headerMode: 'screen',
    }
  )

export default {
    screen: UserNavigation,
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => {
        return <Icon name="user-circle" size={30} color={tintColor} />;
      }
    }
  }