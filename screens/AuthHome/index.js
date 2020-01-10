import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, Platform, TouchableHighlight } from "react-native";
import styles from "../commonStyles";
import { _retrieveData, _removeData } from "../../helpers/store";

export default class AuthHomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.logo}>Budge</Text>
          <Text style={styles.description}>
            Description to tell them to enter budget and time and how it will be
            used... ?? Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat.
          </Text>
          {/* TODO: style */}
          <Text style={styles.recommendation}>We recommend that you signup to save and view your accomplishments.</Text>
          <TouchableHighlight onPress={() => navigate("App")}>
              <Text style={styles.button}>TRY IT!</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate("Signup")}>
              <Text style={styles.button}>SIGNUP</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate("Login")}>
              <Text style={styles.button}>LOGIN</Text>
            </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
