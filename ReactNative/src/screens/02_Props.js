import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Render = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
        </View>
    );
}

const Props = () => {
    return (
        <View style={styles.container}>
            <Render name="Elbert"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#222222',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#F4F5F6'
    }
})

export default Props;