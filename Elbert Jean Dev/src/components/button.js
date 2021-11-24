import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Button = ({label, url, props}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperButton}>
      <TouchableOpacity 
        style={styles.containerButton}
        onPress={() =>Linking.openURL(url)}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const ButtonNavigation = ({label, page}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperButtonNavigation}>
      <TouchableOpacity 
        style={styles.containerButton}
        onPress={() => navigation.navigate(page)}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperButton: {
    marginVertical:20,
  },
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

export { Button as default, ButtonNavigation }