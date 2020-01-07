import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text
} from "react-native";
import styles from "../commonStyles";

export default class TimerScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
            <Text> Hello </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
