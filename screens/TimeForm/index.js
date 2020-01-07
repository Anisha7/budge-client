import React, { Component } from "react";
import {
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Text, TextInput } from 'react-native-custom-fonts';
import styles from "../commonStyles";

export default class TimeFormScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      budget: "",
      time: "",
      bank: "" // token from backend
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.logo}>Budge</Text>
          <Text>
            Description to tell them to enter budget and time and how it will be
            used... ?? Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat.
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChangeBudget(text)}
              placeholder="00.00"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChangeTime(text)}
              placeholder="00.00.00"
            />
            {/* NON functional for MVP */}
            <TouchableHighlight onPress={() => this.connectBank()}>
              <Text style={styles.input}>Use account to track spending</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.start()}>
              <Text style={styles.button}>START</Text>
            </TouchableHighlight>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
