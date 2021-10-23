import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Animated,
    FlatList,
} from 'react-native';

import LogoNerd from '../assets/LogoNerd.png';
import AppTeste from '../assets/AppTeste.png';

const ApiScreen = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const carrega = async () => {
            const resposta = await fetch('http://192.168.0.2/api/usuario.php');
            const usuarios = await resposta.json();
            setLista(usuarios);
        }
        carrega();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image source={LogoNerd} style={styles.image} />
                <Image source={AppTeste} style={styles.imageText} />
            </View>

            <FlatList 
                style={{marginTop:50}}
                data = {lista}
                pullRefresh = {true} 
                renderItem={({item : usuario}) =>(
                    <View style={{
                        marginVertical:5, 
                        alignItems:'center', 
                        borderWidth:1, 
                        marginHorizontal:30,
                        paddingVertical:10,
                        borderRadius:10,
                        backgroundColor:"#242424",
                        flexDirection:'row',
                        borderColor:"#242424"}}>
                        <Image source={require ('../assets/LogoNerd.png')} style={{height:50, width:50, marginHorizontal:10,}}/>
                        <Text style={{
                            color:"#F4F4F4", 
                            fontSize:16, 
                            fontWeight:'bold',
                            marginRight:10}}>{usuario.nome}</Text>
                        <Text style={{
                            color:"#E4E4E4"}}>{usuario.email}</Text>
                    </View>
                )}
                keyExtractor={item => item.email}
            />
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
    text:{
        textAlign:'center', 
        marginTop:10,
        fontWeight:'bold',
        fontSize:16,
    },
});

export default ApiScreen;