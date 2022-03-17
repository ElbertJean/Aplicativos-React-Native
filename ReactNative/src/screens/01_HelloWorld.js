import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import Button from '../components/Button';
import cool from '../assets/cool.png';

const HelloWorld = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation='flipInY' delay={600} style={styles.containerText}>
                <Text style={styles.text}>Hello World!</Text>
            </Animatable.View>
            <Animatable.View animation='fadeInRight' delay={2500} style={styles.containerImage}>
                <Image source={cool} style={styles.image}/>
            </Animatable.View>
            <Animatable.View animation='fadeInUp' delay={1000} style={styles.containerFooter}>
                <Button style={{marginTop:20,}} name='Voltar' page='Home'/>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#222222',
    },
    containerText :{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        color:'#F4F5F6'
    },
    containerImage:{
        flex:1,
        justifyContent:'flex-start', 
        alignItems:'center', 
        paddingTop:40,
    },
    image:{
        width:'60%', 
        height:60
    },
    containerFooter:{
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'center'
    }
})

export default HelloWorld;