import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import LogoNerd from '../assets/LogoNerd.png';
import AppTeste from '../assets/AppTeste.png';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect (() => {
    const carrega = async () => {
      const resposta = await fetch ('http://192.168.0.2/api/usuario.php');
      const usuario = await resposta.json();
      setEmail(usuario.email);
      setSenha(usuario.senha);
    }
    carrega();
  },[]);

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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          placeholder="Digite a sua senha" 
          placeholderTextColor="#C4C4C4"
          style={styles.textInput}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={() => navigation.navigate('ApiScreen')}>Login</Text>
        </TouchableOpacity>
        <View style={{marginTop:150}}>
          <Text style={styles.textBottom} onPress={() => navigation.navigate('RecoverPasswordScreen')}>Esqueci minha senha</Text>
          <Text style={styles.textBottom} onPress={() => navigation.navigate('RegisterAccountScreen')}>Ainda não possui conta? Cadastre-se</Text>
        </View>
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

export default LoginScreen;