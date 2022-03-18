import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';

const Home = () => {

    const navigation = useNavigation ();

    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={600} style={styles.containerHeader}>
                <Text style={styles.text}>Estudos React Native</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={1000} style={styles.containerBody}>
                <Animatable.View animation='fadeInRight' delay={1500}>
                    <Button style={{marginTop:40}} name="Hello World" page="HelloWorld"/>
                </Animatable.View>
                <Animatable.View  animation='fadeInRight' delay={2000}>
                    <Button style={{marginTop:10}} name="Props" page="Props"/>
                </Animatable.View>
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
        marginTop:60,
        marginBottom:20,
        marginLeft:20,
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#F4F5F6', 
    },
    containerBody:{
        flex:1,
        backgroundColor:'#F4F5F6',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
})

export default Home;