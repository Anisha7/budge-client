import React, { Component } from "react";
import {
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput
} from "react-native";
import FormFieldWrapper from "../FormFieldWrapper";
import styles from "../commonStyles";
import {
  faDollarSign,
  faClock,
  faPiggyBank
} from "@fortawesome/free-solid-svg-icons";

// export default class TimeFormScreen extends Component {

//   render() {
//     return (
//       <Text style={{ fontSize: 50 }}>HELLO</Text>
//     )
//   }
// }

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
    console.log("I MADE IT TO MAIN")
    // return (
    //  // <View style={{ borderColor:'blue', borderWidth:5, width:100, height: 100, backgroundColor: 'yellow' }}>
    //     <Text style={{fontSize:300}}> HELLO THERE </Text>
    //   // </View>
    // )

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.logo}>Budge</Text>
          <Text style={styles.description}>
            Description to tell them to enter budget and time and how it will be
            used... ?? Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat.
          </Text>
          <View style={styles.form}>
            <FormFieldWrapper
              onChange={this.onChangeBudget}
              placeholder="00.00"
              title="Budget"
              icon={faDollarSign}
            />
            <FormFieldWrapper
              onChange={this.onChangeTime}
              placeholder="00:00:00"
              title="Timer"
              icon={faClock}
            />
            {/* NON functional for MVP */}
            {/* <TouchableHighlight onPress={() => this.connectBank()}>
              <Text style={styles.input}>Use account to track spending</Text>
            </TouchableHighlight> */}
            <TouchableHighlight onPress={() => this.start()}>
              <Text style={styles.button}>START</Text>
            </TouchableHighlight>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
