import React, {useState} from 'react';
import {Text, StyleSheet,View, ScrollView, TextInput, Alert} from 'react-native';

const Tabuada = (a) => {
  if(isNaN(a) || a < 0){
    Alert.alert('Insira um número válido')
  } else {
  for(let i = 0; i <= 10; i++) {
    let tabuada = i * a;
    console.log(tabuada);
  }
}
}

const TabuadaScreen = () => {

  let [valor, setValor] = useState(0);
  let resultado = Tabuada(Number(valor));

  return( 
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Tabuada</Text>
        <Text style={styles.text}>A tabuada é uma representação em forma de tabela 
        utilizada para fazer cálculos das operações matemáticas: adição, 
        subtração, multiplicação e divisão. Ela contempla os dez algarismos de 1 a 
        10, que são apresentados por colunas e linhas definidas de acordo com o tipo 
        de cálculo que será feito.
        </Text>
        <Text style={{...styles.text, marginTop:20}}>
          Insira no campo abaixo qual tabuada você deseja 
        </Text>
      </View>
      <View>
        <Text style={{...styles.title, fontSize:18, marginTop:30}}>Qual tabuada você deseja?</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType="decimal-pad"
          onChangeText={setValor}
        />
        <View>
          {valor == 0 || isNaN(valor)? 
            <></> 
            :
            <>
              <Text style={{...styles.text, fontWeight:'bold', marginTop:40}}>{`A tabuada do ${valor} é`}</Text>
              <Text style={{...styles.text, fontWeight:'bold', marginTop:40}}>{resultado}</Text>
              
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

export default TabuadaScreen
;
