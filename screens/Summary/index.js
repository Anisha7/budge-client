import React, { Component } from "react";
import {
  View,
  TouchableHighlight,
  Text
} from "react-native";
import styles from "../commonStyles";
import { _retrieveData, _removeData } from "../../helpers/store";

export default class SummaryScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.getStoredData()
  }

  async getStoredData() {
    await _retrieveData("timerData").then(data => {
      this.setState({ data: JSON.parse(data) });
    });
  }

  async ok() {
    this.setState({
      data: null
    });
    const { navigate } = this.props.navigation;
    // Remove data from local storage
    await _removeData("timerData").then(async () => {
      // Navigate back to timeForm page if logged in
      navigate("TimeForm");
      // TODO: Else navigate to main auth screen
    });
  }

  render() {
    const remaining = this.state.data
      ? `$${this.state.data.budget - this.state.data.spent}`
      : "loading";
    const spent = this.state.data ? `$${this.state.data.spent}` : "loading";
    const budget = this.state.data ? `$${this.state.data.budget}` : "loading";

    const diff = this.state.data ? this.state.data.budget - this.state.data.spent : 0
    const savedString = diff < 0 ? `You spent $${Math.abs(diff)} over budget!` : `You spent $${Math.abs(diff)} under budget`
    return (
      <View style={styles.container}>
          <Text style={styles.logo}>Budge</Text>
          <Text style={styles.time}>Time up!</Text>
          <View style={styles.stats}>
            <Text style={styles.statTitle}>Remaining budget</Text>
            <Text style={styles.statInfo}>{remaining}</Text>
            <Text style={styles.statTitle}>Total spent so far</Text>
            <Text style={styles.statInfo}>{spent}</Text>
            <Text style={styles.statTitle}>Total budget</Text>
            <Text style={styles.statInfo}>{budget}</Text>
            {/* TODO: STYLES */}
            <Text style={styles.summary}>
              {savedString}
            </Text>
          </View>
          <TouchableHighlight onPress={() => this.ok()}>
            <Text style={styles.button}>DONE</Text>
          </TouchableHighlight>
        {/* TODO: ^ ok button that clears local storage */}
        </View>
    );
  }
}
