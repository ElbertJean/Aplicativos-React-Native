import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, Alert} from 'react-native';

import portfolio from '../assets/portfolio.png';
import cerebro from '../assets/cerebro.png';
import welcome from '../assets/welcome.png';
import Button from '../components/button';

const MenuScreen = () => {
  return( 
    <ScrollView>
      <View style={styles.containerImage}>
        <Image source ={welcome} style ={styles.imageWelcome}/>
        <Image source ={portfolio} style ={styles.imagePortfolio}/>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.title}>Neste aplicativo você vai encontrar alguns exercícios feitos por mim
        com o intuito de fixar os conhecimentos obtidos em estudos
        </Text>
        <Image source ={cerebro} style ={styles.imageCerebro}/>
        
        <View style={styles.containerExercises}>
          <Text style={styles.title2}>1º Exercício</Text>
          <Text style={styles.text}>MDC - Máximo Divisor Comum</Text>
          <Button 
            label='Acessar' 
            style={styles.botao}
            onPress={() =>Alert.alert('teste')}
          />
        </View>
        <View style={styles.containerExercises}>
          <Text style={styles.title2}>1º Exercício</Text>
          <Text style={styles.text}>MDC - Máximo Divisor Comum</Text>
          <Button 
            label='Acessar' 
            style={styles.botao}
            onPress={() =>Alert.alert('teste')}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  containerImage:{
    alignItems:'center',
    backgroundColor: "#007C4F",
    borderBottomWidth:3,
    borderColor:"#343A40",
  },
  imageWelcome:{
    width:'80%',
    height:30,
    marginTop:40,
  },
  imagePortfolio:{
    width:'80%',
    height:80,
    marginTop:10,
    marginBottom:50,
  },
  containerText:{
    backgroundColor: "#222222",
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    color:'#CDD6DB',
    marginHorizontal:30,
    marginTop:30,
    textAlign:'center',
  },
  imageCerebro:{
    width:'50%',
    height:100,
    marginTop:10,
    alignSelf:'center',
    marginBottom:40,
  },
  containerExercises:{
    borderTopWidth:1,
    marginHorizontal:30,
    borderTopColor:'#F4F4F4',
  },
  title2:{
    fontSize:25,
    fontWeight:'bold',
    color:'#CDD6DB',
    marginTop:40,
    textAlign:'center',
  },
  text:{
    fontSize:16,
    color:'#CDD6DB',
    marginTop:10,
    marginLeft:20,
    textAlign:'center',
    },
  botao:{
    borderColor:'#f4f4f4',
    borderWidth:1,
    marginVertical:30,
  },
});

export default MenuScreen;
