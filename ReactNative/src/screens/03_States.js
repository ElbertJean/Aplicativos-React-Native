import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Button from '../components/Button';

const States = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Animatable.Text animation='flipInY' delay={600} style={styles.text}>States</Animatable.Text>
                <Animatable.View animation='fadeInRight' delay={1500}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress = {() =>setCount(count + 1)} 
                    >
                        <Text style={styles.textButton}>Fui apertado {count}x</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
            <Animatable.View animation='fadeInUp' delay={1000} style={styles.containerBody}>
                <Button name='Voltar' page='Home' style={{marginTop:20}}/>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#222222',
    },
    containerHeader :{
        flex:1,
        marginTop:60,
        marginBottom:20,
        marginLeft:20,
        justifyContent:'center',
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        color:'#F4F5F6', 
        paddingBottom:40,
        textAlign:'center',
    },
    containerBody:{
        backgroundColor:'#F4F5F6',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    button:{
        backgroundColor:'#F4F5F6',
        width:'50%',
        height:40,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        marginBottom:20,
    },
    textButton:{
        fontSize:18,
        fontWeight:'bold',
        color:'#222222',
    }
})

export default States;