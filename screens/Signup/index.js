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
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "react-native-dotenv";
import { _storeData } from '../../helpers/store';
import * as EmailValidator from 'email-validator';

export default class SignupScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      secret: "",
      secret2: "",
      errorMessage: "",
    };
  }

  signup(navigate) {
    const name = this.state.name.split(" ");
    // if not full name: throw err
    if (name.length < 1) {
      this.setState({ errorMessage:  "Provide first and last name" });
      return
    }
    const fname = name[0];
    const lname = name.length > 0 ? name[1] : "";
    const email = this.state.email;
    // if not valid email: throw err
    if (!EmailValidator.validate(email)) {
      this.setState({ errorMessage: "Provide a valid email" });
      return
    }
    // if password don't match: throw err
    if (this.state.secret !== this.state.secret2) {
      this.setState({ errorMessage: "Passwords should match" });
      return
    }
    const password = this.state.secret;

    // Sign up
    fetch(`${BASE_URL}/user/`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fname, lname, email, password })
    })
    .then(res => {
      if (res.ok === false) {
        throw Error("Try again!");
      }
      return res.json();
    }).then(async json => {
      // save authtoken in local storage
      await _storeData('AuthToken', json.Authorization)
      navigate("App");
    })
    .catch(err => {
      this.setState({ errorMessage: err.message });
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
              onChange={name => this.setState({ name })}
              placeholder="First Last"
              title="Name"
              icon={faUser}
              value={this.state.name}
              keyboardType="default"
            />
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
            <FormFieldWrapper
              onChange={secret2 => this.setState({ secret2 })}
              placeholder="******"
              title="Secret"
              icon={faLock}
              value={this.state.secret2}
              secureTextEntry={true}
              keyboardType="default"
            />
            <Text>{this.state.errorMessage}</Text>
            <TouchableHighlight onPress={() => this.signup(navigate)}>
              <Text style={styles.button}>SIGNUP</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.otherAuthOptions}>
            <TouchableHighlight onPress={() => navigate("App")}>
              <Text style={styles.button}>TRY IT!</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate("Login")}>
              <Text style={styles.button}>LOGIN</Text>
            </TouchableHighlight>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
