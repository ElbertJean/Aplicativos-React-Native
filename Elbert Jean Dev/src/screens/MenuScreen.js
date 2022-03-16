import React from 'react';
import {StyleSheet, Text, View, ImageBackground, ScrollView, Linking} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../components/button';
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';
import CarouselApp from '../components/CarouselApp';
import ContainerJobs from '../components/ContainerJobs';

const MenuScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <HeaderApp/>
      <View animation="fadeInUp" style={{backgroundColor:"#242424"}}>
        <View style={styles.container}>
          <Text style={styles.title}>Quem sou eu?</Text>
          <Text style={styles.subTitle}>Formado em Técnico em Automação 
          Industrial, trabalho a 1 ano na área de desenvolvimento de software.</Text>
          <View style={{marginBottom:20}}>
            <Button label='Currículo' url='https://www.linkedin.com/in/elbert-jean-1757b017b/'/>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title1}>Desenvolvimento de Software</Text>
          <CarouselApp/>
        </View>

        <View style={styles.container1}>
          <Text style={styles.title2}>Confira alguns trabalhos</Text>
          <ContainerJobs/>
        </View>
        <FooterApp/>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:30,
    marginTop:40,
    borderBottomWidth:1,
    borderColor:'#D1D9DC',
  },
  container1: {
    marginHorizontal:30,
    marginTop:40,
    
  },
  title:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
  title1:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
  title2:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,
  },
  subTitle:{
    fontFamily:"rubik",
    color:"#D1D9DC",
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
    marginTop:10,
  },
  image:{
    marginTop:20,
    height:150,
  },
  subTitleImage:{
    fontFamily:"rubik",
    color:"#343A40",
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10,
    marginBottom:10,
  },
});

export default MenuScreen;