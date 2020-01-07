import React from "react";
import {
  View,
  Text, 
  TextInput
} from "react-native";

const FormFieldWrapper = ({ onChange, placeholder, title, icon }) => {
    return (
        <View>
            {/* ICON */}
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