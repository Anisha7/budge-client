import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button,
  TextInput
} from "react-native";
import styles from "../commonStyles";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default class TimerScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      expense: ""
    };
    this.onChangeExpense = this.onChangeExpense.bind(this);
  }

  onChangeExpense(expense) {
    this.setState({ expense });
  }

  updateRemainingBudget() {
    //   Update local storage
  }

  render() {
    // TODO: Get below stats from local storage once set up
    const time = "00:00:00"; 
    const remaining = "$246";
    const spent = "$44";
    const budget = "$300";
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.logo}>Budge</Text>
          <Text style={styles.time}>{time}</Text>
          <View style={styles.stats}>
            <Text style={styles.statTitle}>Remaining budget</Text>
            <Text style={styles.statInfo}>{remaining}</Text>
            <Text style={styles.statTitle}>Total spent so far</Text>
            <Text style={styles.statInfo}>{spent}</Text>
            <Text style={styles.statTitle}>Total budget</Text>
            <Text style={styles.statInfo}>{budget}</Text>
            <Text>Used cash? Add expenses below.</Text>
          </View>
          <View style={styles.formField}>
            <FontAwesomeIcon
              icon={faDollarSign}
              size={18}
              style={{ color: "black" }}
            />
            <TextInput
              style={styles.input}
              onChangeText={expense => this.onChangeExpense(expense)}
              placeholder="00.00"
              enablesReturnKeyAutomatically={true}
              keyboardType="decimal-pad"
            />
            {/* TODO: add on click */}
            <Button
              style={styles.inputTitle}
              title="add"
              onPress={() => this.updateRemainingBudget()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
