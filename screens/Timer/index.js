import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import styles from "../commonStyles";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { _storeData, _retrieveData, _removeData } from "../../helpers/store";
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
      timeLeft: "loading",
      isTimerRunning: false
    };
    this.onChangeExpense = this.onChangeExpense.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.cancel = this.cancel.bind(this);
    this.timer = null;
  }

  componentDidMount() {
    this.getStoredData().then(() => {
      this.startTimer();
    });
  }

  componentDidUpdate() {
    if (this.timer === null) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer() {
    var self = this;
    this.setState({ isTimerRunning: true });
    const endTime = this.state.data.endTime;
    // Starting timer
    this.timer = setInterval(async function() {
      const timeLeft = calculateTimeLeft(endTime);
      self.setState({ timeLeft });
      // End timer and go to summary when timer reaches 0
      if (endTime <= Date.now()) {
        clearInterval(this.timer);
        self.setState({
          data: null,
          expense: "",
          timer: null,
          timeLeft: "loading"
        });
        const { navigate } = self.props.navigation;
        navigate("Summary");
      }
    }, 1000);
  }

  onChangeExpense(expense) {
    this.setState({ expense });
  }

  updateRemainingBudget() {
    if (this.state.data === null) {
      return;
    }
    let amount = this.state.expense;
    let temp = this.state.data;
    temp.spent += parseFloat(amount);
    this.setState({ data: temp });
    // QUESTION: Does this need to have an await?
    _storeData("timerData", JSON.stringify(this.state.data));
  }

  async cancel() {
    // Stop timer
    clearInterval(this.timer);
    this.setState({
      data: null,
      expense: "",
      timer: null,
      timeLeft: "loading"
    });
    const { navigate } = this.props.navigation;
    // Remove data from local storage
    await _removeData("timerData").then(async () => {
      // Navigate back to timeForm page
      navigate("TimeForm");
    });
  }

  async getStoredData() {
    await _retrieveData("timerData").then(data => {
      this.setState({ data: JSON.parse(data) });
    });
  }

  render() {
    const remaining = this.state.data
      ? `$${this.state.data.budget - this.state.data.spent}`
      : "loading";
    const spent = this.state.data ? `$${this.state.data.spent}` : "loading";
    const budget = this.state.data ? `$${this.state.data.budget}` : "loading";

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.logo}>Budge</Text>
          <Text style={styles.time}>{this.state.timeLeft}</Text>
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
