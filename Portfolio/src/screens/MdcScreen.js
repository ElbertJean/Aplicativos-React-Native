import React, {useState} from 'react';
import {Text, StyleSheet,View, TextInput, Alert} from 'react-native';

const mdc = (a, b) => {
  let resto = Number(1);
  console.log(a, b, resto);
  
  if(isNaN(a) || isNaN(b) || a <0 || b <0 || b > a) {
    console.log('Insira um número válido')
    return Number(0);
  } else {
    while(resto != 0) {
      resto = a % b;
      a = Number(b);
      b = Number(resto);
      console.log(a, b, resto);
    }
    console.log(typeof(a), typeof(b), typeof(resto))
    return a;
  }
}

console.log(mdc(50,28))

const MdcScreen = () => {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  //const resultado = mdc(primeiroValor, segundoValor);

  return( 
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>MDC - Máximo divisor comum</Text>
        <Text style={styles.text}>O máximo divisor comum entre dois ou mais números 
          reais é o maior número real que é fator de tais números. Por exemplo, os 
          divisores comuns de <Text style={{fontWeight:'bold'}}>12 e 18</Text> são 
          <Text style={{fontWeight:'bold'}}> 1,2,3 e 6</Text>, logo 
          <Text style={{fontWeight:'bold'}}> MDC = 6</Text>
        </Text>
        <Text style={{...styles.text, marginTop:20}}>Insira nos campos abaixo dois números reais para 
          obter o MDC</Text>
      </View>
      <View>
        <Text style={{...styles.title, fontSize:18, marginTop:30}}>Insira o maior número</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType="decimal-pad"
          onChangeText={setPrimeiroValor}
        />
        <Text style={{...styles.title, fontSize:18, marginTop:40}}>Insira o menor número</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType="decimal-pad"
          onChangeText={setSegundoValor}
        />
        <View>
          {primeiroValor === 0 || 
          segundoValor === 0 || 
          primeiroValor < 0 || 
          segundoValor < 0 ? 
            <></> 
            :
            <>
              <Text style={{...styles.text, fontWeight:'bold', marginTop:40}}>O MDC é</Text>
              <View style={styles.rowResult}>
                <Text style={{...styles.title, marginTop:0, color:"#F4F4F4"}}>''</Text>
              </View>
            </>
          }
        </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:"#E1ECE6",
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    color:'#222222',
    marginHorizontal:30,
    marginTop:30,
    textAlign:'center',
  },
  text:{
    fontSize:16,
    color:'#222222',
    marginHorizontal:20,
    marginTop:30,
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
    marginHorizontal:150,
    marginTop:10,
    paddingVertical:4,
  }
});

export default MdcScreen;
