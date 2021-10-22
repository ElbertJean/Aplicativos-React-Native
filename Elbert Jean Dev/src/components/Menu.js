import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableHighlight, Image } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';

import { ButtonNavigation } from '../components/button';
import pacman from '../assents/pacman.jpg';
import facebook from '../assents/facebook.png';
import GitHub from '../assents/GitHub.png';
import Instagram from '../assents/Instagram.png';
import Youtube from '../assents/Youtube.png';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView contentContainerStyle={styles.menu}>
      <Image source = {pacman} style={styles.image}/>
      <View style={styles.container}>
        <ButtonNavigation style={styles.button} label="Tela inicial" page="MenuScreen"/>
        <ButtonNavigation style={styles.button} label="Fotos" page="PhotosScreen"/>
        <ButtonNavigation style={styles.button} label="Vídeos" page="VideoScreen"/>
        <ButtonNavigation style={styles.button} label="Contato" page="ContactScreen"/>
      </View>   
      <View style={styles.containerIcons}>
        <TouchableHighlight onPress={() =>Linking.openURL("https://www.facebook.com/elbertjean")}>
          <Image source={facebook} style={styles.icons}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() =>Linking.openURL("https://github.com/ElbertJean")}>
          <Image source={GitHub} style={styles.icons}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() =>Linking.openURL("https://www.instagram.com/elbertjean/")}>
          <Image source={Instagram} style={styles.icons}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() =>Linking.openURL("https://www.youtube.com/channel/UCUFR1m27xKWKlqKwCAXBgxQ")}>
          <Image source={Youtube} style={styles.icons}/>
        </TouchableHighlight>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:"#000000",
  },
  image:{
    width:'100%',
    height:70,
    marginTop:-18,
  },
  headerWrapper: {
    flex: 0,
    marginTop: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#CDD6DB',
  },
  container:{
    flex:1,
    marginHorizontal:10,
    marginTop:40,
    //justifyContent:'center', 
    },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    textAlign: 'left',
  },
  textFooter:{
    color:"#F4F4F4",
    textAlign:'center',
    fontSize:16,
    marginBottom:0,
    marginHorizontal:10,
  },
  containerIcons:{
    flexDirection:'row',
    alignSelf:'center',
  },
  icons:{
    marginHorizontal:10,
    width:30,
    height:30,
    marginBottom:30,
  }
});

export default Menu;
