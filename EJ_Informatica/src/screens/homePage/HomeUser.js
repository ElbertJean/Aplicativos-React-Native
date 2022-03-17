import React from 'react';

import {Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Linking } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';
import email from '../../assets/email.png';
import whatsapp from '../../assets/whatsapp.png';

const HomeUser = () => {
    
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
                <Text style={styles.title}>Solicite seu orçamento</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}
                    onPress = {() => navigation.navigate("Budget")}
                    >Solicitar</Text>
                </TouchableOpacity>

                <View style={styles.containerFooter}>
                    <View style={{...styles.containerIcons, marginTop:20}}>
                        <TouchableOpacity onPress={() =>Linking.openURL("mailto:elbertjean.work@gmail.com")}>
                            <Image source={email} style={styles.icons}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>Linking.openURL("mailto:elbertjean.work@gmail.com")}>
                            <Text style={styles.number}>elbertjean.work@gmail.com</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerIcons}>
                        <TouchableOpacity onPress={() =>Linking.openURL("https://api.whatsapp.com/send?phone=5512991231288")}>
                            <Image source={whatsapp} style={styles.icons}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>Linking.openURL("https://api.whatsapp.com/send?phone=5512991231288")}>
                            <Text style={styles.number}>(12) 99123-1288</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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
        backgroundColor:'#222222',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
    },
    imageLogo:{
        width:'80%',
    },
    containerText:{
        flex:4,
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
        backgroundColor:'#222222',
        width:"50%",
        paddingVertical:8,
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    textButton:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F4F5F6',
    },
    containerFooter:{
        flex:1,
        position:'absolute',
        bottom:20,
        alignItems:'center',
        alignSelf:'center',
    },
    textFooter:{
        fontSize:18,
        fontWeight:'bold',
        color:'#222222',
        textAlign:'center',
    },
    number:{
        color:"#343A40",
        fontSize:16,
        fontWeight:'bold',
    },
    containerIcons:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    icons:{
        width:30,
        height:30,
        marginRight:10,
    },
})

export default HomeUser;