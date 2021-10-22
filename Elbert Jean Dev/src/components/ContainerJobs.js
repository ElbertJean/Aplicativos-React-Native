import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Button from './button';
import AplicativoNormalizei from '../assents/AplicativoNormalizei.png';
import DesignEmporio from '../assents/DesignEmporio.png';
import DesignNormalizei from '../assents/DesignNormalizei.png';
import SiteNormalizei from '../assents/SiteNormalizei.png';

const ContainerJobs = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={SiteNormalizei} style={styles.image}/>
                <Text style={styles.title}>Site Normalizei</Text>
                <Text style={styles.subTitle}>Manutenção do site</Text>
                <Button label="Acessar" url='https://normalizei.com.br/'/>
            </View>
            <View style={styles.container}>
                <Image source={AplicativoNormalizei} style={styles.image}/>
                <Text style={styles.title}>Aplicativo Normalizei</Text>
                <Text style={styles.subTitle}>Desenvolvimento do Aplicativo em React native</Text>
                <Button label="Acessar" url='https://play.google.com/store/apps/details?id=com.normalizei'/>
            </View>
            <View style={styles.container}>
                <Image source={DesignNormalizei} style={styles.image}/>
                <Text style={styles.title}>Design Aplicativo Normalizei</Text>
                <Text style={styles.subTitle}>Criação do design das telas do aplicativo no Figma</Text>
                <Button label="Acessar" url="https://www.figma.com/file/55dS1joLJgBAJaKdVMBsiK/Normalizei"/>
            </View>
            <View style={styles.container}>
                <Image source={DesignEmporio} style={styles.image}/>
                <Text style={styles.title}>Design Aplicativo Empório Fruit</Text>
                <Text style={styles.subTitle}>Criação do design das telas do aplicativo no Figma</Text>
                <Button label="Acessar" url="https://www.figma.com/file/LycDWrlcy1yhITLXjd8IVb/Emp%C3%B3rio-Fruit"/>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor:'#242424',
    borderWidth:2,
    borderColor:'#CDD6DB',
    borderRadius:30,
    marginBottom:20,
  },
  image:{
    marginTop:20,
    width:'85%',
    height:150,
    borderRadius:30,
  },
  title:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:20,
    marginTop:10,
    fontWeight:'bold',
    textAlign:'center',
  },
  subTitle:{
    fontFamily:"rubik",
    color:"#D1D9DC",
    fontSize:18,
    marginTop:10,
    marginHorizontal:30,
    marginBottom:10,
    fontWeight:'600',
    textAlign:'center',
  },
});

export default ContainerJobs;