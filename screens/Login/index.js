import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import FormFieldWrapper from "../FormFieldWrapper";
import styles from "../commonStyles";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "react-native-dotenv";
import { _storeData, _retrieveData } from '../../helpers/store';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      secret: "",
      errorMessage: "",
    };
  }

  login(navigate) {
    const { email, secret } = this.state
    const password = secret
    fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => {
        return res.json()
      }).then(async (json) => {
        await _storeData('AuthToken', json.Authorization)
        return navigate("App")
      }).catch(err => {
        this.setState({ errorMessage: err.message })
      });
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
          <View style={styles.form}>
            <FormFieldWrapper
              onChange={email => this.setState({ email })}
              placeholder="example@example.com"
              title="Email"
              icon={faEnvelope}
              value={this.state.email}
              keyboardType="default"
            />
            <FormFieldWrapper
              onChange={secret => this.setState({ secret })}
              placeholder="******"
              title="Secret"
              icon={faLock}
              value={this.state.secret}
              secureTextEntry={true}
              keyboardType="default"
            />
            <Text>{this.state.errorMessage}</Text>
            <TouchableHighlight onPress={() => this.login(navigate)}>
              <Text style={styles.button}>LOGIN</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.otherAuthOptions}>
            <TouchableHighlight onPress={() => navigate("App")}>
              <Text style={styles.button}>TRY IT!</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate("Signup")}>
              <Text style={styles.button}>SIGNUP</Text>
            </TouchableHighlight>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
