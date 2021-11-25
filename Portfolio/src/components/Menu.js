import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';

import atividades from '../assets/atividades.png';
import Button from './button';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView contentContainerStyle={styles.menu}>
      <View style={styles.containerImage}>
        <Image source ={atividades} style ={styles.imageAtividades}/>
      </View>
      <View style={styles.containerButton}>
          <Button label = "Tela inicial" screen ="Tela inicial" style={styles.button}/>
          <Button label = "Calculadora" screen ="Calculadora" style={styles.button}/>
          <Button label = "Exercício 1" screen ="MDC" style={styles.button}/>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:"#007C4F",
    borderWidth:2,
    borderColor:'#F4F4F4',
  },
  containerImage:{
    backgroundColor: "#007C4F",
    alignItems:'center',
  },
  imageAtividades:{
    width:'40%',
    height:112,
    marginVertical:30,
  },
  containerButton:{
      marginHorizontal:30,
  },
  button:{
    borderColor:'white',
    borderWidth:1
  }
});

export default Menu;
