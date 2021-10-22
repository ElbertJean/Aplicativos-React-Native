import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import LogoNerd from '../assets/LogoNerd.png';
import AppTeste from '../assets/AppTeste.png';

const ApiScreen = () => {
    const navigation = useNavigation();
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const carrega = async () => {
            const resposta = await fetch('http://192.168.0.2/api');
            const texto = await resposta.text();
            setMensagem(texto);
        }
        carrega();
    }, []);

    useEffect(() => {
        const carrega = async () => {
            const resposta = await fetch('http://192.168.0.2/api/usuario.php');
            const usuario = await resposta.json();
            setNome(usuario.nome);
            setEmail(usuario.email);
        }
        carrega();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image source={LogoNerd} style={styles.image} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={AppTeste} style={styles.imageText} />
            </View>

            <View style={{ marginTop: 70 }}>
                <Text style={{textAlign:'center', marginBottom:10}}>teste</Text>
                <Text style={{textAlign:'center', marginBottom:10}}>teste</Text>
                <Text style={{textAlign:'center', marginBottom:10}}>teste</Text>
                <Text style={{textAlign:'center', marginBottom:10}}>teste</Text>
                <Text style={{textAlign:'center', marginBottom:10}}>teste</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2C9050",
    },
    imageText: {
        width: '70%',
        height: 100,
    },
    image: {
        width: '20%',
        height: 100,
        marginTop: 50,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#242424",
        marginHorizontal: 20,
        paddingVertical: 6,
        paddingLeft: 10,
        borderRadius: 10,
        marginTop: 20,
        fontWeight: '600',
        fontSize: 16,
        color: "#F4F4F4",
        letterSpacing: 1,
    },
    button: {
        borderWidth: 1,
        borderColor: "#242424",
        marginHorizontal: 120,
        marginTop: 20,
        paddingVertical: 8,
        backgroundColor: "#242424",
        borderRadius: 10,
    },
    textButton: {
        textAlign: 'center',
        color: '#D1D9DC',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textBottom: {
        marginTop: 15,
        textAlign: 'center',
        color: '#D1D9DC',
        fontWeight: '600',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default ApiScreen;