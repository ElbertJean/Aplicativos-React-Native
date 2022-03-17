import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Button = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={{...styles.button, ...props.style}}
            onPress={() => navigation.navigate(props.page)}
        >
            <Text style={styles.textButton}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#222222',
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
        color:'#F4F5F6',
    }
})

export default Button;