import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import LogoNerd from '../assets/LogoNerd.png';
import AppTeste from '../assets/AppTeste.png';

const RecoverPasswordScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Image source={LogoNerd} style={styles.image} />
      </View>
      <View style={{alignItems:'center'}}>
      <Image source={AppTeste} style={styles.imageText} />
      </View>
      
      <View style={{marginTop:70}}>
        <TextInput 
          placeholder="Digite o seu e-mail" 
          placeholderTextColor="#C4C4C4"
          style={styles.textInput}
          keyboardType='email-address'
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('E-mail inserido', text)}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent:'flex-end', flex:1, marginBottom:50 }}>
        <Text style={styles.textBottom} onPress={() => navigation.navigate('LoginScreen')}>Já possui conta?</Text>
        <Text style={styles.textBottom} onPress={() => navigation.navigate('RegisterAccountScreen')}>Ainda não possui conta? Cadastre-se</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#2C9050",
  },
  imageText:{
    width:'70%',
    height:100,
  },
  image:{
    width:'20%',
    height:100,
    marginTop:50,
  },
  textInput:{
    borderWidth:1,
    borderColor:"#242424",
    marginHorizontal:20,
    paddingVertical:6,
    paddingLeft:10,
    borderRadius:10,
    marginTop:20,
    fontWeight:'600',
    fontSize:16,
    color:"#F4F4F4",
    letterSpacing:1,
  },
  button:{
    borderWidth:1,
    borderColor:"#242424",
    marginHorizontal:120,
    marginTop:20,
    paddingVertical:8,
    backgroundColor:"#242424",
    borderRadius:10,
  },
  textButton:{
    textAlign:'center',
    color:'#D1D9DC',
    fontWeight:'bold',
    fontSize:16,
  },
  textBottom:{
    marginTop:15,
    textAlign:'center',
    color:'#D1D9DC',
    fontWeight:'600',
    fontSize:16,
    textDecorationLine:'underline',
  },
});

export default RecoverPasswordScreen;