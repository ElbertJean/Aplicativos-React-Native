import React from 'react';
import {StyleSheet, Text, View, Image,SafeAreaView, TouchableHighlight} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import HtmlCss from '../assents/HtmlCss.png';
import WordPress from '../assents/WordPress.png';
import Figma from '../assents/Figma.png';
import ReactNative from '../assents/ReactNative.png';

const CarouselApp = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={HtmlCss} style={styles.image}/>
        <Text style={styles.subTitleImage}>Sites em HTML, CSS</Text>
      </View>
      
      <View style={styles.container}>
        <Image source={WordPress} style={styles.image}/>
        <Text style={styles.subTitleImage}>Sites em WordPress</Text>
      </View>

      <View style={styles.container}>
        <Image source={ReactNative} style={styles.image}/>
        <Text style={styles.subTitleImage}>Aplicativos em React Native</Text>
      </View>

      <View style={styles.container}>
        <Image source={Figma} style={styles.image}/>
        <Text style={styles.subTitleImage2}>Design para Sites e Aplicativos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#242424',
  },
  image:{
    marginTop:30,
    width:'100%',
    height:150,
  },
  title:{
    fontFamily:"rubik",
    color:"#343A40",
    fontSize:25,
    fontWeight:'bold',
  },
  subTitleImage:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:18,
    fontWeight:'600',
    textAlign:'center',
    marginTop:20,
    marginBottom:10,
  },
  subTitleImage2:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:18,
    fontWeight:'600',
    textAlign:'center',
    marginTop:20,
    marginBottom:40,
  },
});

export default CarouselApp;