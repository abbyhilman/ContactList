import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputText = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#020202',
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    color: '#020202',
  },
});
