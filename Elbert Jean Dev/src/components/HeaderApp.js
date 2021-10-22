import React from 'react';
import {StyleSheet, Text, View, ImageBackground } from 'react-native';

import {useNavigation} from '@react-navigation/native';

import code from '../assents/code.jpg';

const HeaderApp = () => {
  return (
      <ImageBackground source={code} style={styles.imageHead}>
        <View style={styles.containerTitle}>
          <Text style={styles.subTitleHead}>Seja Bem Vindo!</Text>
          <Text style={styles.titleHead}>Elbert Jean</Text>
          <Text style={styles.subTitleHeadTwo}>Desenvolvimento de Software</Text>
          <Text style={styles.subTitleHeadThree}>Trabalho com desenvolvimento e 
          manutenções de sites, focando HTML, CSS e WordPress</Text>
        </View>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  imageHead:{
    height:280,
  },
  titleHead:{
    fontFamily:"rubik",
    color:"#FFFFFF",
    fontSize:35,
    fontWeight:'bold',
    marginLeft:30,
    marginTop:5,
  },
  subTitleHead:{
    fontFamily:"rubik",
    color:"#d3d3d3",
    fontSize:20,
    fontWeight:'bold',
    marginTop:50,
    marginLeft:30,
  },
  subTitleHeadTwo:{
    fontFamily:"rubik",
    color:"#d3d3d3",
    fontSize:20,
    fontWeight:'bold',
    marginTop:5,
    marginLeft:30,
  },
  subTitleHeadThree:{
    fontFamily:"rubik",
    color:"#BEC0CF",
    fontSize:14,
    fontWeight:'bold',
    marginTop:5,
    marginHorizontal:30,
  },
});

export default HeaderApp;