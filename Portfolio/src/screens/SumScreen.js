import React, {useState} from 'react';
import {Text, StyleSheet,View, ScrollView, TextInput, Alert} from 'react-native';

const soma = (a, b) => {
  
  if(isNaN(a) || isNaN(b)) {
    Alert.alert('Insira um número válido')
  } else {
    return Number(a)+ Number(b);
  }
}

const SumScreen = () => {
  let [primeiroValor, setPrimeiroValor] = useState(0);
  let [segundoValor, setSegundoValor] = useState(0);
  const resultado = soma(primeiroValor,segundoValor);

  return( 
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Soma</Text>
        <Text style={styles.text}>A adição é uma entre as quatro operações básicas da 
          matemática, sendo a <Text style={{fontWeight:'bold'}}>primeira operação</Text> a ser estudada. O resultado de uma 
          adição entre dois ou mais números é conhecido como soma.
        </Text>
        <Text style={{...styles.text, marginTop:20}}>
          Insira nos campos abaixo dois números para serem somados 
        </Text>
      </View>
      <View>
        <Text style={{...styles.title, fontSize:18, marginTop:30}}>Insira o primeiro número</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType="decimal-pad"
          onChangeText={setPrimeiroValor}
        />
        <Text style={{...styles.title, fontSize:18, marginTop:40}}>Insira o segundo número</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType="decimal-pad"
          onChangeText={setSegundoValor}
        />
        <View>
          {primeiroValor === 0 || segundoValor === 0 ? 
            <></> 
            :
            <>
              <Text style={{...styles.text, fontWeight:'bold', marginTop:40}}>A soma dos valores é</Text>
              <View style={styles.rowResult}>
                <Text style={{...styles.title, marginTop:0, color:"#F4F4F4"}}>{resultado}</Text>
              </View>
            </>
          }
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:"#E1ECE6",
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    color:'#222222',
    marginHorizontal:30,
    marginTop:30,
    textAlign:'center',
  },
  text:{
    fontSize:16,
    color:'#222222',
    marginHorizontal:30,
    marginTop:20,
    textAlign:'center',
  },
  textInput:{
    borderWidth:1,
    borderRadius:10,
    borderColor:'white',
    backgroundColor:"#222222",
    paddingVertical:6,
    marginHorizontal:100,
    marginTop:10,
    color:'#F4F4F4',
    textAlign:'center',
    fontWeight:'bold'   
  },
  rowResult:{
    borderWidth:1,
    backgroundColor:'#007C4F',
    borderRadius:10,
    marginHorizontal:100,
    marginTop:10,
    paddingVertical:4,
  }
});

export default SumScreen;
