import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableHighlight, Linking} from 'react-native';

import footer from '../assents/footer.jpg';
import email from '../assents/email.png';
import WhatsApp from '../assents/WhatsApp.png';

const FooterApp = () => {
  return (
      <ImageBackground source={footer} style={styles.imageFooter}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Elbert Jean</Text>
          <Text style={styles.subTitle}>Entre em contato para desenvolvimento 
          de projetos!</Text>
        </View>

        <View style={styles.containerIcons}>
          <TouchableHighlight onPress={() =>Linking.openURL("mailto:elbertjean.work@gmail.com")}>
            <Image source={email} style={styles.icons}/>
          </TouchableHighlight>
          <Text style={styles.number}>elbertjean.work@gmail.com</Text>
        </View>

        <View style={styles.containerIcons}>
          <TouchableHighlight onPress={() =>Linking.openURL("https://api.whatsapp.com/send?phone=5512991231288")}>
            <Image source={WhatsApp} style={styles.icons}/>
          </TouchableHighlight>
          <Text style={styles.number}>(12) 99123-1288</Text>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageFooter:{
    height:240,
  },
  title:{
    fontFamily:"rubik",
    color:"#FFFFFF",
    fontSize:25,
    fontWeight:'bold',
    marginTop:30,
    textAlign:'center',
  },
  subTitle:{
    fontFamily:"rubik",
    color:"#BEC0CF",
    fontSize:16,
    fontWeight:'bold',
    marginTop:10,
    marginBottom:10,
    marginHorizontal:20,
    textAlign:'center',
  },
  number:{
    fontFamily:"rubik",
    color:"#BEC0CF",
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  },
  containerIcons:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },
  icons:{
    width:30,
    height:30,
    marginRight:10,
  },
});

export default FooterApp;