import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';

import atividades from '../assets/atividades.png';
import Button from './button';
import { ScrollView } from 'react-native-gesture-handler';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView contentContainerStyle={styles.menu}>
      <View style={styles.containerImage}>
        <Image source ={atividades} style ={styles.imageAtividades}/>
      </View>
      <ScrollView>
        <View style={styles.containerButton}>
            <Button label = "Tela inicial" screen ="Tela inicial" style={styles.button}/>
            <Button label = "Soma" screen ="Soma" style={styles.button}/>
            <Button label = "Divisão" screen ="Divisão" style={styles.button}/>
            <Button label = "Multiplicação" screen ="Multiplicação" style={styles.button}/>
            <Button label = "Tabuada" screen ="Tabuada" style={styles.button}/>
            <Button label = "Calculadora" screen ="Calculadora" style={styles.button}/>
            <Button label = "MDC" screen ="MDC" style={styles.button}/>
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:"#007C4F",
    borderWidth:2,
    borderColor:'#E1ECE6',
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
    borderColor:'#E1ECE6',
    borderWidth:1
  }
});

export default Menu;
