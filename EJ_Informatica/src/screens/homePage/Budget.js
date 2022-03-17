import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity,Alert, TextInput} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


const Budget = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
        <View style={styles.container}>
            <Animatable.View style={styles.containerWelcome} animation="fadeInLeft" delay={600} >
                <Text style={styles.textWelcome}>Orçamento</Text>        
            </Animatable.View>

            <Animatable.View style={styles.containerLogin} animation="fadeInUp" delay={1000}>   
                <Text style={styles.title}>Descrição do equipamento</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Computador ou notebook?'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <Text style={styles.title}>Configurações do equipamento</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: i3, 4GB, 1TB'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <Text style={styles.title}>Marca</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: Samsung, Dell, Acer'
                    placeholderTextColor="#C4C4C4" 
                />

                <Text style={styles.title}>Modelo</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: Samsung NP270E4E, Acer Nitro 5'
                    placeholderTextColor="#C4C4C4" 
                />    
                <Text style={{...styles.title, marginBottom:10}}>Descrição do serviço a solicitar</Text>
                <TextInput style={styles.lastTextInput} multiline={true}/>

                <TouchableOpacity style={styles.button}>
                    <Text 
                    style={styles.textButton}
                    onPress = {() => Alert.alert("Seu solicitação de orçamento foi enviada com sucesso!")}
                    >Enviar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   container : {
        flex:1,
        backgroundColor:"#222222",
    },
    containerWelcome:{
        paddingHorizontal:20,
        paddingTop:80,
        paddingBottom:30,
    },
    textWelcome:{
        color:'#F4F5F6',
        fontSize:25,
        fontWeight:'bold',
    },
    containerLogin:{
        backgroundColor:'#F4F5F6',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:"#222222",
        marginTop:25,
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:15,
        color:"#343A40"
    },
    lastTextInput:{
        height:300,
        paddingHorizontal:10,
        paddingVertical:10,
        borderColor:"#222222",
        borderWidth:1,
        borderRadius:10,
        color:"#343A40",
        textAlignVertical: "top",
        letterSpacing: 1,
        lineHeight: 22,
    },
    button:{
        backgroundColor:'#222222',
        width:"60%",
        paddingVertical:8,
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        marginBottom:40,
    },
    textButton:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F4F5F6',
    },
});

export default Budget;