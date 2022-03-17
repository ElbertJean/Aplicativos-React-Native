import React from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Congratulations = () => {

    const navigation = useNavigation ();

    return (
        <ScrollView style={styles.container}>
            <Animatable.View style={styles.containerWelcome} animation="fadeInLeft" delay={600} >
                <Text style={styles.textWelcome}>Obrigado por se cadastrar!</Text>        
            </Animatable.View>
            
            <Animatable.View style={styles.containerLogin} animation="fadeInUp" delay={1000}>
                <Text style={{...styles.title, textAlign:'center'}}>
                    Para finalizar o seu cadastro, insira mais algumas informações
                </Text>     
                <Text style={styles.title}>Nome</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Insira seu nome completo'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <Text style={styles.title}>Endereço</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: Av. das Rosas, 112'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <Text style={styles.title}>Complemento</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: Bloco 4, Ap 501'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <Text style={styles.title}>Bairro</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Insira o nome do seu bairro'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <Text style={styles.title}>Cidade</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Insira o nome da sua cidade'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <Text style={styles.title}>Telefone (1)</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: 12 99123-1212'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <Text style={styles.title}>Telefone (2)</Text>  
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: 12 99123-1212'
                    placeholderTextColor="#C4C4C4" 
                />
                
                <TouchableOpacity style={styles.button}>
                    <Text 
                    style={styles.textButton}
                    onPress = {() => navigation.navigate("HomeUser")}
                    >Finalizar Cadastro</Text>
                </TouchableOpacity>
                    
            </Animatable.View>
 
        </ScrollView>
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
        marginBottom:40,
    },
    textButton:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F4F5F6',
    },
})

export default Congratulations;