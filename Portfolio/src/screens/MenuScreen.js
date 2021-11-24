import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import cerebro from '../assets/cerebro.png';
import atividades from '../assets/atividades.png';
import Button from '../components/button';

const MenuScreen = () => {
  const navigation = useNavigation ();

  return( 
    <ScrollView>
      <View style={styles.containerImage}>
        <Image source ={atividades} style ={styles.imageAtividades}/>
      </View>
      <View>
        <Text style={styles.title}>Neste aplicativo você vai encontrar alguns exercícios feitos por mim
        com o intuito de fixar os conhecimentos obtidos em estudos
        </Text>
        <Image source ={cerebro} style ={styles.imageCerebro}/>
        
        <View style={styles.containerExercises}>
          <Text style={styles.title2}>1º Exercício</Text>
          <Text style={styles.text}>MDC - Máximo Divisor Comum</Text>
          <Button 
            label="Acessar" 
            style={styles.button}
            screen="Exercício 1"
          />
        </View>
        <View style={styles.containerExercises2}>
          <Text style={styles.title3}>2º Exercício</Text>
          <Text style={styles.text}>Ainda a definir</Text>
          <Button 
            label='Acessar' 
            style={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  containerImage:{
    flexDirection:'column',
    backgroundColor: "#007C4F",
    justifyContent:'center',
    alignItems:'center',
  },
  imageAtividades:{
    width:'30%',
    height:123,
    marginVertical:30,
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    color:'#222222',
    marginHorizontal:30,
    marginTop:30,
    textAlign:'center',
  },
  title2:{
    fontSize:25,
    fontWeight:'bold',
    color:'#222222',
    marginTop:40,
    textAlign:'center',
  },
  title3:{
    fontSize:25,
    fontWeight:'bold',
    color:'#000000',
    marginTop:20,
    textAlign:'center',
  },
  imageCerebro:{
    width:'50%',
    height:100,
    marginTop:20,
    alignSelf:'center',
    marginBottom:40,
  },
  containerExercises:{
    borderTopWidth:1,
    marginHorizontal:30,
    borderTopColor:'#222222',
  },
  containerExercises2:{
    marginHorizontal:30,
  },
  text:{
    fontSize:16,
    color:'#343A40',
    marginTop:10,
    marginLeft:20,
    textAlign:'center',
    },
  button:{
    borderColor:'#f4f4f4',
    borderWidth:1,
    marginTop:10,
    marginBottom:20,
    backgroundColor:"#222222",
  },
  wrapperButtonNavigation: {
    marginVertical:10,
  },
  containerButton:{
    backgroundColor: '#343A40',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 14,
    textTransform: 'capitalize',
    letterSpacing: 1,
    textAlign: 'center',
    color:'#F4F4F4',
    backgroundColor:'#343A40'
  },
});

export default MenuScreen;
