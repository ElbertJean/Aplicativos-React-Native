import React from 'react';

import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';

const Home = () => {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View style={styles.containerLogo} animation="fadeInRight" delay={600}>
                <Image 
                    source={logo}
                    style={styles.imageLogo}
                    resizeMode="contain"
                    />
            </Animatable.View>

            <Animatable.View style={styles.containerText} animation="fadeInUp" delay={1000}>
                <Text style={styles.title}>Manutenção de Computadores e Notebooks</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
                <TouchableOpacity style={styles.button} onPress ={ () => navigation.navigate("Login")} >
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#222222'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#222222',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
    },
    imageLogo:{
        width:'90%',
    },
    containerText:{
        flex:1,
        backgroundColor:'#F4F5F6',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:20,
    },
    title :{
        fontSize:25,
        fontWeight:'bold',
        color:'#222222',
        paddingTop:30,
        paddingBottom:12,
        textAlign:'center',
    },
    text:{
        fontSize:16,
        color:'#C1C1C1',
        textAlign:'center',
        fontWeight:'bold',
    },
    button:{
        position:'absolute',
        backgroundColor:'#222222',
        width:"60%",
        paddingVertical:8,
        borderRadius:20,
        bottom:40,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    textButton:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F4F5F6',
    },
})

export default Home;