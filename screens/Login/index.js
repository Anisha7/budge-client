import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";
import styles from "../commonStyles";
import { _retrieveData, _removeData } from "../../helpers/store";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.logo}>Budge</Text>
          <Text style={styles.time}>Login</Text>
        </View>
    );
  }
}
