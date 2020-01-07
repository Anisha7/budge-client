import React from "react";
import {
  View,
  Text, 
  TextInput
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "../commonStyles";

const FormFieldWrapper = ({ onChange, placeholder, title, icon }) => {
    return (
        <View style={styles.formField}>
            <FontAwesomeIcon
              icon={icon}
              size={32}
              style={{ color: "black" }}
            />
            <TextInput
              style={styles.input}
              onChangeText={text => onChange(text)}
              placeholder={placeholder}
            />
            <Text>{title}</Text>
        </View>
    )
}

export default FormFieldWrapper;