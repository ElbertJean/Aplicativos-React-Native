import React from 'react';
import {Text, StyleSheet, Image, ScrollView} from 'react-native';

const Exercise1Screen = () => {
  return( 
    <ScrollView>
        <Text style={styles.title}>Neste aplicativo você vai encontrar alguns exercícios feitos por mim
            com o intuito de fixar os conhecimentos obtidos em estudos
        </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  title:{
    fontSize:16,
    fontWeight:'bold',
    color:'#222222',
    marginHorizontal:30,
    marginTop:30,
    textAlign:'center',
  },
});

export default Exercise1Screen;
