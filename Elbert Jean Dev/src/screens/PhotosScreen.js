import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../components/button';
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';


const PhotosScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
        <HeaderApp />
            <View style={{backgroundColor:"#242424"}}>
            <View style={styles.container}>
                <Text style={styles.title}>Fotos</Text>
            </View>
            <FooterApp/>
        </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal:30,
    marginTop:40,
    marginBottom:180,
  },
  title:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
});

export default PhotosScreen;