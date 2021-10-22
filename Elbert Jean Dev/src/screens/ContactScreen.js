import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking, TextInput} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import { ButtonNavigation } from '../components/button';
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';
import Button from '../components/button';

const ContactScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <HeaderApp />
      <View style={{backgroundColor:"#242424"}}>
        <View style={styles.container}>
          <Text style={styles.title}>Entre em Contato</Text>
          <Text style={styles.subTitle}>Nome</Text>
          <TextInput 
            style={styles.textInput} 
            placeholder="Nome completo" 
            placeholderTextColor="#B4B4B4"/>
          <Text style={styles.subTitle}>E-mail</Text>
          <TextInput 
            style={styles.textInput} 
            keyboardType="email-address"
            placeholder="Informe seu e-mail" 
            placeholderTextColor="#B4B4B4"
          />
          <Text style={styles.subTitle}>Telefone</Text>
          <TextInput 
            style={styles.textInput } 
            keyboardType="number-pad"
            placeholder="(99) 99999-9999" 
            placeholderTextColor="#B4B4B4"
          />
          <Text style={styles.subTitle}>O que você precisa?</Text>
          <TextInput style={styles.lastTextInput} multiline={true}/>
        </View>

        <View style={styles.wrapperButton}>
          <ButtonNavigation label="Enviar" page='MenuScreen'/>
        </View>
        <FooterApp/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal:30,
    marginTop:40,
    marginBottom:20,
  },
  title:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
  subTitle:{
    fontFamily:"rubik",
    color:"#D1D9DC",
    fontSize:16,
    fontWeight:'bold',
    marginBottom:10,
    marginTop:30,
  },
  textInput:{
    paddingLeft:10, 
    paddingVertical:6,
    borderColor:"#D1D9DC",
    borderWidth:1,
    borderRadius:10,
    color:"#FFFFFF",
  },
  lastTextInput:{
    height:300,
    paddingHorizontal:10,
    paddingVertical:10,
    borderColor:"#D1D9DC",
    borderWidth:1,
    borderRadius:10,
    color:"#D1D9DC",
    textAlignVertical: "top",
    letterSpacing: 1,
    lineHeight: 22,
  },
  wrapperButton: {
    marginHorizontal:30,
    marginBottom:40,
  },
});

export default ContactScreen;