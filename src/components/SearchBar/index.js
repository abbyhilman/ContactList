/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {Input} from 'react-native-elements';

const Searchbar = ({
  value,
  onChangeText,
  onSubmitEditing,
  onClear,
  placeholder,
}) => {
  return (
    <Input
      value={value}
      textContentType="none"
      autoCorrect={false}
      placeholder={
        placeholder === undefined ? 'Search Anything Here...' : placeholder
      }
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainerStyle}
      containerStyle={styles.containerStyle}
      returnKeyType="search"
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      leftIcon={<Icon name="search" size={RFValue(20)} />}
      rightIconContainerStyle={styles.rightIconContainerStyle}
      rightIcon={
        value !== '' ? (
          <Icon
            onPress={onClear}
            name="close"
            // color={items.theme.inactiveIcon}
            size={RFValue(20)}
          />
        ) : null
      }
    />
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  input: {
    fontSize: RFValue(14),
    color: '#302E45',
    paddingLeft: RFValue(8),
    // fontFamily: 'ProximaNova-Regular',
  },
  containerStyle: {
    height: RFValue(32),
    marginTop: RFValue(10),
  },
  inputContainerStyle: {
    // backgroundColor: '#1A1A1A',
    // borderColor: '#1A1A1A',
    borderWidth: RFValue(1),
    borderRadius: RFValue(8),
    height: RFValue(36),
  },
  rightIconContainerStyle: {paddingRight: RFValue(10)},
  leftImage: {
    width: RFValue(20),
    height: RFValue(20),
  },
});
