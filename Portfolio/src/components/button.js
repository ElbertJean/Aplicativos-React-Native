import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import { useNavigation } from '@react-navigation/core';

const Button = ({label, style, page}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperButtonNavigation}>
        <TouchableOpacity 
        style={{...styles.containerButton, ...style}}
        onPress={() => navigation.navigate(page)}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperButtonNavigation: {
    marginVertical:10,
  },
  containerButton:{
    backgroundColor: '#343A40',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 14,
    textTransform: 'capitalize',
    letterSpacing: 1,
    textAlign: 'center',
    color:'#F4F4F4',
  },
});

export default Button;