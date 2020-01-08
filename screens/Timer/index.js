import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button,
  TextInput,
  TouchableHighlight
} from "react-native";
import styles from "../commonStyles";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { _storeData, _retrieveData } from "../../helpers/store";
import { calculateTimeLeft } from "../../helpers/math";

export default class TimerScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      expense: "",
      timer: null,
      timeLeft: "loading"
    };
    this.onChangeExpense = this.onChangeExpense.bind(this);
    this.startTimer = this.startTimer.bind(this)
  }

  componentDidMount() {
    this.getStoredData().then(() => {
        this.startTimer();
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  startTimer() {
    var self = this;
    const endTime = this.state.data.endTime;
    const timer = setInterval(function() {
      const timeLeft = calculateTimeLeft(endTime);
      self.setState({timeLeft})
    }, 1000);

    this.setState({timer})
  }

  onChangeExpense(expense) {
    this.setState({ expense });
  }

  updateRemainingBudget() {
    //   Update local storage
  }

  cancel() {
    // TODO: clear local storage
    // navigate to timeForm page
    const { navigate } = this.props.navigation;
    navigate("TimeForm");
  }

  async getStoredData() {
    await _retrieveData("timerData").then(data => {
      console.log("HERE");
      console.log(data);
      this.setState({ data: JSON.parse(data) });
    });
  }

  render() {
    // if (this.state.data === null) {
    //   this.getStoredData();
    // }
    let time = "loading";
    let remaining = "loading";
    let spent = "loading";
    let budget = "loading";
    // TODO: Get below stats from local storage once set up
    if (this.state.data !== null) {
      let endTime = this.state.data.endTime;
      time = calculateTimeLeft(endTime);
    //   setInterval(function() {
    //     time = calculateTimeLeft(endTime);
    //   }, 1000);
      remaining = `$${this.state.data.budget - this.state.data.spent}`;
      spent = `$${this.state.data.spent}`;
      budget = `$${this.state.data.budget}`;
    }

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
            <Text style={styles.addCashTitle}>
              Used cash? Add expenses below.
            </Text>
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
              <TouchableHighlight onPress={() => this.updateRemainingBudget()}>
                <Text style={styles.inputTitle}>add</Text>
              </TouchableHighlight>
            </View>
          </View>
          <TouchableHighlight onPress={() => this.cancel()}>
            <Text style={styles.button}>CANCEL</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
