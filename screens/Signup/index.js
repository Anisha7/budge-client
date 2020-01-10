import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import FormFieldWrapper from "../FormFieldWrapper";
import styles from "../commonStyles";
import { _retrieveData, _removeData } from "../../helpers/store";
import {
  faPersonBooth
} from '@fortawesome/free-solid-svg-icons';

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
      secret2: ""
    };
  }

  signup() {
    console.log("SIGNING UP");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Budge</Text>
        <View style={styles.form}>
          <FormFieldWrapper
            onChange={name => this.setState({ name })}
            placeholder="First Last"
            title="Name"
            icon={faPersonBooth} // TODO
            value={this.state.name}
            keyboardType="default"
          />
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
          <FormFieldWrapper
            onChange={secret2 => this.setState({ secret2})}
            placeholder="******"
            title="Secret"
            icon={faPersonBooth} // TODO
            value={this.state.secret2}
            secureTextEntry={true}
            keyboardType="default"
          />
          {/* <Text>{this.state.error}</Text> */}
          <TouchableHighlight onPress={() => this.signup()}>
            <Text style={styles.button}>SIGNUP</Text>
          </TouchableHighlight>
        </View>
        {/* TODO: style */}
        <View style={styles.otherAuthOptions}>

        </View>
      </View>
    );
  }
}
