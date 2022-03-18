import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Button from '../components/Button';

const Render = (props) => {
    return (
        <View>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
}

const Props = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerBody}>
                <Animatable.View animation='fadeInRight' delay={500}>
                    <Render name="Criando"/>
                </Animatable.View>
                <Animatable.View animation='fadeInRight' delay={1000}>
                    <Render name="Um"/>
                </Animatable.View>
                <Animatable.View animation='fadeInRight' delay={1500}>
                    <Render name="Componente"/>
                </Animatable.View>
                <Animatable.View animation='fadeInRight' delay={2000}>
                    <Render name="Único"/>
                </Animatable.View>
                <Animatable.View animation='fadeInRight' delay={2500}>
                    <Render name="Com"/>
                </Animatable.View>
                <Animatable.View animation='fadeInRight' delay={3000}>
                    <Render name="Props"/>
                </Animatable.View>
            </View>
            <Animatable.View animation='fadeInUp' delay={3500} style={styles.containerFooter}>
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
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#F4F5F6',
        marginTop:10,
    },
    containerBody:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    containerFooter:{
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'center'
    }
})

export default Props;