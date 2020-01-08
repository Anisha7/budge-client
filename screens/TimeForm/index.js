import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
  Text
} from 'react-native';
import FormFieldWrapper from '../FormFieldWrapper';
import styles from '../commonStyles';
import {
  faDollarSign,
  faClock,
  // faPiggyBank
} from '@fortawesome/free-solid-svg-icons';
import { AnDate } from 'andatelib';
import { _storeData, _retrieveData } from '../../helpers/store';
import { calculateEndTime } from "../../helpers/math";

export default class TimeFormScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      budget: '',
      time: '',
      bank: '' // token from backend
    };
    this.onChangeBudget = this.onChangeBudget.bind(this)
    this.onChangeTime = this.onChangeTime.bind(this)
  }

  onChangeBudget(budget) {
    this.setState({ budget })
  }

  onChangeTime(time) {
    if (time.length > 8) {
      return
    }

    if (time.length < this.state.time.length) {
      this.setState({time})
      return
    }
    let formattedTime = ''
    for (let i=0; i<time.length; i++) {
      let char = time[i]
      if ((i==2 || i == 5) && char !== ':') {
        formattedTime += ':'
      }
      formattedTime += char
    }

    this.setState({ time: formattedTime })
  }

  async start() {
    // TODO: make sure time and budget are valid! budget > $1 and 00.00.00 < time < any:59:59
    // TODO: Calculate end time from start time in a try/catch block ^
    console.log("STARTING with ", this.state.time)
    let endTime = calculateEndTime(this.state.time)
    console.log(endTime)
    let data = {
      budget: parseInt(this.state.budget),
      endTime: endTime,
      spent: 0,
    }
    // TODO: Store budget and end time to local storage
    await _storeData('timerData', JSON.stringify(data))
    // navigate to timer page
    const { navigate } = this.props.navigation;
    this.setState({
      budget: '',
      time: '',
      bank: ''
    })
    navigate('Timer')
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
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
              placeholder='00.00'
              title='Budget'
              icon={faDollarSign}
              value={this.state.budget}
            />
            <FormFieldWrapper
              onChange={this.onChangeTime}
              placeholder='00:00:00'
              title='Timer'
              icon={faClock}
              value={this.state.time}
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
