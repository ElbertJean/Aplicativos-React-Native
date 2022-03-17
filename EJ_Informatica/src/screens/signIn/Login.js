import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Login = () => {

    const navigation = useNavigation ();

    return (
        <View style={styles.container}>
            <Animatable.View style={styles.containerWelcome} animation="fadeInLeft" delay={600} >
                <Text style={styles.textWelcome}>Seja bem-vindo(a)</Text>        
            </Animatable.View>

            <Animatable.View style={styles.containerLogin} animation="fadeInUp" delay={1000}>
                <Text style={styles.title}>Email</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Insira seu e-mail' 
                    placeholderTextColor="#C4C4C4"
                />      
                <Text style={styles.title}>Senha</Text>  
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true} 
                    placeholder='Insira sua senha'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <TouchableOpacity style={styles.button}>
                    <Text 
                        style={styles.textButton}
                        onPress = {() => navigation.navigate("Congratulations")}
                    >Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.text}
                    onPress ={() => navigation.navigate("RecoverPassword")}
                    >Esqueceu a sua senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text 
                        style={{...styles.text, marginTop:10}}
                        onPress ={ () => navigation.navigate("Register")}
                        >Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
                    
            </Animatable.View>
        </View>
    );
}

const styles= StyleSheet.create ({
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
        flex:6,
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
    button:{
        backgroundColor:'#222222',
        width:"60%",
        paddingVertical:8,
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
    },
    textButton:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F4F5F6',
    },
    text:{
        color:"#C1C1C1",
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
    },
})

export default Login;