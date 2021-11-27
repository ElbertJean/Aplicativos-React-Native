import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import cerebro from '../assets/cerebro.png';
import atividades from '../assets/atividades.png';
import Button from '../components/button';

const width = Dimensions.get('screen').width;

const MenuScreen = () => {
  const navigation = useNavigation ();

  return( 
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source ={atividades} style ={styles.imageAtividades}/>
        <Text style={styles.title}>Neste aplicativo você vai encontrar alguns exercícios feitos por mim
        com o intuito de fixar os conhecimentos obtidos em estudos
        </Text>
        <Text style={{...styles.title, ...styles.subTitle}}>Acesse o menu superior para obter acesso as atividades</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor: "#007C4F",
    justifyContent:'center',
  },
  containerImage:{
    alignItems:'center',
  },
  imageAtividades:{
    width:'40%',
    height:(204.8/512)*width,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:'#222222',
    marginHorizontal:30,
    marginTop:30,
    textAlign:'center',
    color:'#E1ECE6'
  },
  subTitle:{
    marginBottom:130, 
    marginTop:20, 
    color:'#222222'
  },
});

export default MenuScreen;
