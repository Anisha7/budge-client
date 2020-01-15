import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "../commonStyles";
import { BASE_URL } from "react-native-dotenv";
import { _retrieveData, _removeData } from "../../helpers/store";

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      authToken: "LOADING"
    };
  }
  async logout(navigate) {
    fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Authorization: this.state.authToken })
    })
      .then(async () => {
        console.log(await _retrieveData("AuthToken"));
        await _removeData("AuthToken");
        await _removeData("timerData");
        return navigate("Auth");
      })
      .catch(err => {
        this.setState({ errorMessage: err.message });
      });
  }

  async setAuthToken() {
    const authToken = await _retrieveData("AuthToken");
    console.log("HERE: ", authToken)
    this.setState({ authToken });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.authToken === "LOADING") {
      this.setAuthToken();
    }
    console.log("authToken: ", this.state.authToken)
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.logout(navigate)}>
          {(this.state.authToken === null || this.state.authToken === undefined) ? (
            <View>
              <TouchableHighlight onPress={() => navigate("Signup")}>
                <Text style={styles.button}>SIGNUP</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => navigate("Login")}>
                <Text style={styles.button}>LOGIN</Text>
              </TouchableHighlight>
            </View>
          ) : (
            <Text style={styles.button}>LOGOUT</Text>
          )}
        </TouchableHighlight>
      </View>
    );
  }
}
