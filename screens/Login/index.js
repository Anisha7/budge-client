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
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      secret: ""
    };
  }

  login() {
    console.log("LOGIN");
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
              icon={faPersonBooth} // TODO
              value={this.state.email}
              keyboardType="default"
            />
            <FormFieldWrapper
              onChange={secret => this.setState({ secret })}
              placeholder="******"
              title="Secret"
              icon={faPersonBooth} // TODO
              value={this.state.secret}
              secureTextEntry={true}
              keyboardType="default"
            />
            {/* <Text>{this.state.error}</Text> */}
            <TouchableHighlight onPress={() => this.login()}>
              <Text style={styles.button}>LOGIN</Text>
            </TouchableHighlight>
          </View>
          {/* TODO: style */}
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
