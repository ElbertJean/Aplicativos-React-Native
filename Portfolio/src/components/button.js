import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Button = ({label, style, screen}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperButtonNavigation}>
        <TouchableOpacity 
          style={{...styles.containerButton, ...style}}
          onPress={() => navigation.navigate(screen)}
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
    backgroundColor: '#222222',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
    color:'#F4F4F4',
  },
});

export default Button;