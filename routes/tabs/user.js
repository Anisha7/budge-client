import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import ProfileScreen from "../../screens/Profile";

// Settings tabs
const UserNavigation = createStackNavigator(
    {
        Profile: { screen: ProfileScreen },
    },
    {
      initialRouteName: 'Profile',
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